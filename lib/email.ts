import { Resend } from 'resend';

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

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await resend.emails.send({
      from: 'FoneFixer <onboarding@resend.dev>',
      to: 'fonefixernz@gmail.com',
      subject: 'New Service Booking Request',
      html: `
        <h2>New Service Booking Request</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Device:</strong> ${data.deviceBrand} ${data.deviceModel}</p>
        <p><strong>Issue:</strong> ${data.issueDescription}</p>
        <p><strong>Preferred Date:</strong> ${data.serviceDate}</p>
        <p><strong>Service Type:</strong> ${data.serviceType}</p>
        <p><strong>Address:</strong> ${data.address}</p>
      `,
    });

    if (response.error) {
      console.error('RESEND ERROR:', response.error);
      return { success: false, message: response.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('SEND EMAIL ERROR:', error);
    return { success: false, message: String(error) };
  }
};
