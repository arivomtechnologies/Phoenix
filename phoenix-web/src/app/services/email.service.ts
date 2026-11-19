import { Injectable, signal } from '@angular/core';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs.config';

export interface ContactEnquiryData {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

export interface EmailSendResult {
  adminSuccess: boolean;
  autoReplySuccess: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  readonly isSending = signal<boolean>(false);
  readonly lastError = signal<string | null>(null);

  /**
   * Dispatches both emails in parallel:
   * 1. Notification to Phoenix Admin (phoenixlabels1@gmail.com)
   * 2. Auto-reply confirmation to the customer
   */
  async sendEnquiryEmails(data: ContactEnquiryData): Promise<EmailSendResult> {
    this.isSending.set(true);
    this.lastError.set(null);

    // Clean phone number for WhatsApp links (digits only)
    const phoneClean = data.phone.replace(/[^0-9]/g, '');

    // Dynamic template parameters expected by EmailJS templates
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      phone_clean: phoneClean,
      category: data.category || 'General Apparel Printing',
      message: data.message,
      // Target recipients
      to_email: data.email,                      // for customer auto-reply
      reply_to: data.email,                      // for admin quick reply
      admin_email: 'phoenixlabels1@gmail.com',   // admin recipient
      submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    let adminSuccess = false;
    let autoReplySuccess = false;
    let errorMessage: string | undefined;

    try {
      // 1. Send Admin Enquiry Notification
      if (emailjsConfig.adminTemplateId && emailjsConfig.adminTemplateId !== 'YOUR_ADMIN_TEMPLATE_ID') {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.adminTemplateId,
          templateParams,
          emailjsConfig.publicKey
        );
        adminSuccess = true;
      }

      // 2. Send Customer Auto-Reply Confirmation
      if (emailjsConfig.autoReplyTemplateId && emailjsConfig.autoReplyTemplateId !== 'YOUR_AUTOREPLY_TEMPLATE_ID') {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.autoReplyTemplateId,
          templateParams,
          emailjsConfig.publicKey
        );
        autoReplySuccess = true;
      }

      return { adminSuccess, autoReplySuccess };
    } catch (err: any) {
      console.error('EmailJS delivery error:', err);
      errorMessage = err?.text || err?.message || 'Failed to dispatch email';
      this.lastError.set(errorMessage || null);
      return { adminSuccess, autoReplySuccess, error: errorMessage };
    } finally {
      this.isSending.set(false);
    }
  }
}
