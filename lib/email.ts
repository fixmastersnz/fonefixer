// Email configuration and utility functions
export interface EmailData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  deviceBrand: string;
  deviceModel: string;
  issueDescription: string;
  serviceDate: string;
  serviceType: string;
  address: string;
}

export const emailConfig = {
  // Gmail SMTP Configuration
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'fonefixernz@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'grtkymufyksbhyjd'
  }
};

import nodemailer from 'nodemailer';

export const sendEmail = async (data: EmailData) => {
  try {
    const transporter = nodemailer.createTransport(emailConfig);

    const mailOptions = {
      from: '"Fone Fixer" <fonefixernz@gmail.com>',
      to: 'fonefixernz@gmail.com',
      subject: 'New Service Booking Request',
      text: `
New Service Booking Request

Customer Details:
Name: ${data.firstName} ${data.lastName}
Phone: ${data.phone}
Email: ${data.email}

Device Information:
Brand: ${data.deviceBrand}
Model: ${data.deviceModel}
Issue Description: ${data.issueDescription}

Service Details:
Preferred Date: ${data.serviceDate}
Service Type: ${data.serviceType}
Address: ${data.address}

This is a booking request from the Fone Fixer website.
      `
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email' };
  }
};
