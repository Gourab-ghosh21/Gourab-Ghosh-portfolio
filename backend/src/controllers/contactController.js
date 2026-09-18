import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';
import { isDbConnected } from '../config/db.js';

// Send email notification via Nodemailer
const sendEmailNotification = async ({ name, email, subject, message, submissionTime }) => {
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'ggourab217@gmail.com';

  if (!emailUser || !emailPassword) {
    console.warn('⚠️  [Nodemailer] EMAIL_USER or EMAIL_PASSWORD not set in .env. Skipping SMTP dispatch.');
    console.log(`[Contact Submission Log] Time: ${submissionTime} | From: ${name} <${email}> | Subject: ${subject}`);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${emailUser}>`,
    replyTo: email,
    to: receiverEmail,
    subject: `[Portfolio Inquiry] ${subject} — from ${name}`,
    text: `New contact form submission from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}
Date: ${submissionTime}

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
            <td style="padding: 8px 0; color: #ffffff;">${subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #9ca3af;">Date:</td>
            <td style="padding: 8px 0; color: #9ca3af;">${submissionTime}</td>
          </tr>
        </table>
        <div style="background: rgba(255, 255, 255, 0.05); border-left: 3px solid #FF5722; padding: 16px; border-radius: 6px; margin: 16px 0;">
          <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #FF5722; letter-spacing: 1px;">Message Content</h4>
          <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; color: #e5e7eb; font-size: 14px;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 11px; color: #6b7280; text-align: center;">
          Sent automatically via Gourab Ghosh Portfolio Backend API
        </p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  console.log(`✅ [Nodemailer] Email notification sent to ${receiverEmail}`);
};

// Handle POST /api/contact
export const submitContact = async (req, res, next) => {
  try {
    // 1. Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
        errors: errors.array().map((err) => ({ field: err.path, message: err.msg })),
      });
    }

    const { name, email, subject, message } = req.body;
    const submissionTime = new Date().toISOString();

    // 2. Persist to MongoDB if connected
    let savedContact = null;
    if (isDbConnected()) {
      try {
        const contactDoc = new Contact({
          name,
          email,
          subject,
          message,
        });
        savedContact = await contactDoc.save();
      } catch (dbError) {
        console.error('❌ [MongoDB Save Error]', dbError.message);
        // Do not crash, continue with notification attempt
      }
    } else {
      console.warn('⚠️  [ContactController] MongoDB not connected; skipping database persistence.');
    }

    // 3. Dispatch Email Notification
    try {
      await sendEmailNotification({ name, email, subject, message, submissionTime });
    } catch (emailError) {
      console.error('❌ [Nodemailer Error]', emailError.message);
      // If DB also failed, return error to client
      if (!savedContact && !isDbConnected()) {
        return res.status(503).json({
          success: false,
          message: 'Service temporarily unavailable. Please email directly at ggourab217@gmail.com.',
        });
      }
    }

    // 4. Return success response
    return res.status(200).json({
      success: true,
      message: 'Message received successfully.',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  submitContact,
};
