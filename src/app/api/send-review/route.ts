// src/app/api/send-review/route.ts
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  try {
    const { name, message, rating } = await request.json();
    const to = 'admin@drkiteacademy.com';
    const subject = 'New Testimonial Submission';

    console.log('Received form data:', { name, message, rating }); // Debug log

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration');
      throw new Error('Email configuration is missing');
    }

    // Create transporter with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const emailContent = `
      <h2>New Testimonial Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Rating:</strong> ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: emailContent,
    });

    console.log('Message sent:', info.messageId);
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Review submitted successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });

  } catch (error: any) {
    console.error('Error details:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Failed to submit review',
      error: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
  }
}