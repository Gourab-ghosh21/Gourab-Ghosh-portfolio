import { validationResult } from 'express-validator';
import { getSupabaseClient } from '../config/supabase.js';
import { getResendClient, getResendFromEmail } from '../config/resend.js';

/**
 * Handles POST /api/contact
 * Integrates Supabase table persistence and Resend email notification.
 */
export const submitContact = async (req, res, next) => {
  try {
    // 1. Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
        errors: errors.array().map((err) => ({ field: err.path, message: err.msg })),
      });
    }

    const { name, email, subject, message } = req.body;
    const cleanSubject = subject && subject.trim().length > 0 ? subject.trim() : 'General Inquiry';
    const submissionDate = new Date().toISOString();

    // 2. Insert into Supabase table 'contact_messages'
    const supabase = getSupabaseClient();
    if (!supabase) {
      console.error('❌ [Supabase Error] SUPABASE_URL or SUPABASE_SECRET_KEY is not configured in process.env.');
      return res.status(500).json({
        success: false,
        message: 'Database service is currently unconfigured. Please contact directly via email.',
      });
    }

    const { data: insertedData, error: supabaseError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name,
          email,
          subject: cleanSubject,
          message,
        },
      ])
      .select();

    if (supabaseError) {
      console.error('❌ [Supabase Error] Failed to insert contact message:', supabaseError.message || supabaseError);
      return res.status(500).json({
        success: false,
        message: 'Failed to record your message. Please try again or reach out directly via email.',
      });
    }

    console.log(`✅ [Supabase] Contact message inserted successfully (ID: ${insertedData?.[0]?.id || 'created'})`);

    // 3. Send email notification via Resend
    const resend = getResendClient();
    if (!resend) {
      console.error('❌ [Resend Error] RESEND_API_KEY is not configured in process.env.');
      return res.status(500).json({
        success: false,
        message: 'Notification service is currently unconfigured. Please contact directly via email.',
      });
    }

    const fromEmail = getResendFromEmail();
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'ggourab217@gmail.com';
    const emailSubject = `[Portfolio Inquiry] ${cleanSubject} — from ${name}`;

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: `Gourab Ghosh Portfolio <${fromEmail}>`,
      to: [receiverEmail],
      reply_to: email,
      subject: emailSubject,
      text: `New contact submission from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${cleanSubject}
Date: ${submissionDate}

Message:
${message}
`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0A0C; color: #ffffff; border-radius: 12px; border: 1px solid rgba(255, 87, 34, 0.3);">
          <h2 style="color: #FF5722; margin-top: 0; font-size: 22px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
            🚀 New Portfolio Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; color: #d1d5db;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #9ca3af;">Name:</td>
              <td style="padding: 8px 0; color: #ffffff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #9ca3af;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #FF5722; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #9ca3af;">Subject:</td>
              <td style="padding: 8px 0; color: #ffffff;">${cleanSubject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #9ca3af;">Date:</td>
              <td style="padding: 8px 0; color: #9ca3af;">${submissionDate}</td>
            </tr>
          </table>
          <div style="background: rgba(255, 255, 255, 0.05); border-left: 3px solid #FF5722; padding: 16px; border-radius: 6px; margin: 16px 0;">
            <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #FF5722; letter-spacing: 1px;">Message Content</h4>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; color: #e5e7eb; font-size: 14px;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 11px; color: #6b7280; text-align: center;">
            Stored in Supabase (contact_messages) &amp; Dispatched via Resend
          </p>
        </div>
      `,
    });

    if (resendError) {
      console.error('❌ [Resend Error] Failed to send email:', resendError.message || resendError);
      return res.status(500).json({
        success: false,
        message: 'Message was stored in database, but email notification delivery failed.',
      });
    }

    console.log(`✅ [Resend] Email notification dispatched successfully to ${receiverEmail} (ID: ${resendData?.id || 'sent'})`);

    // 4. Return confirmed success response
    return res.status(200).json({
      success: true,
      message: 'Message sent and recorded successfully! 🚀',
    });
  } catch (error) {
    console.error('❌ [Contact Submission Error]', error.message || error);
    next(error);
  }
};

export default {
  submitContact,
};
