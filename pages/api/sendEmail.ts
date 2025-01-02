import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface MailError extends Error {
  code?: string;
}

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD // Use App Password, not regular password
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error('Missing email configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Verify transporter before sending
    await transporter.verify();

    await transporter.sendMail({
      from: `"${name}" <${email}>`, // This will show user's name and email as sender
      to: process.env.EMAIL_USER,    // Your Gmail address
      replyTo: email,               // Makes it easy to reply to the sender
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
      text: `
Portfolio Site Form Submission
---------------------------
Name: ${name}
Email: ${email}

Message:
${message}
      `
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error: unknown) {
    const mailerError = error as MailError;
    console.error('Failed to send email:', {
      error: mailerError.message,
      stack: mailerError.stack,
      code: mailerError.code
    });
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: mailerError.message 
    });
  }
}
