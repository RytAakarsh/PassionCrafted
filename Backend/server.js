import dotenv from 'dotenv';
import express from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();



// ✅ Configure Nodemailer

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS          
  }
});

// ✅ API for Interested Form (NO Query)
app.post('/send-interested-email', (req, res) => {
  const { name, email, country, zipcode, phone } = req.body;

  const mailOptions = {
    from: 'passioncrafted001@gmail.com',
    to: 'passioncrafted001@gmail.com',
    subject: 'New Interested Form Submission - Passion Crafted',
    html: `
      <h2>New Interested Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Zipcode:</strong> ${zipcode}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Error sending email:', error);
      res.status(500).send({ success: false, message: 'Email not sent' });
    } else {
      console.log('✅ Email sent:', info.response);
      res.send({ success: true, message: 'Email sent successfully' });
    }
  });
});

// ✅ API for Contact Us Form (WITH Query)
app.post('/send-contact-email', (req, res) => {
  const { name, email, country, zipcode, phone, query } = req.body;

  const mailOptions = {
    from: 'passioncrafted001@gmail.com',
    to: 'passioncrafted001@gmail.com',
    subject: 'New Contact Us Inquiry - Passion Crafted',
    html: `
      <h2>New Contact Us Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Zipcode:</strong> ${zipcode}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Query:</strong> ${query}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Error sending email:', error);
      res.status(500).send({ success: false, message: 'Email not sent' });
    } else {
      console.log('✅ Email sent:', info.response);
      res.send({ success: true, message: 'Email sent successfully' });
    }
  });
});

// ✅ Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
