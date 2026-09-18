import { Resend } from 'resend';

let resendInstance = null;

/**
 * Get or initialize Resend client using RESEND_API_KEY.
 * Never logs or exposes the API key.
 */
export const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  if (!resendInstance) {
    resendInstance = new Resend(apiKey);
  }

  return resendInstance;
};

/**
 * Verified sender address in Resend.
 * Defaults to the standard onboarding sender available on all Resend accounts.
 */
export const getResendFromEmail = () => {
  return process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
};

export const isResendConfigured = () => {
  return Boolean(process.env.RESEND_API_KEY);
};

export default getResendClient;
