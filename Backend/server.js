import dotenv from 'dotenv';
import express from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // 🔥 Must-have for parsing JSON data

// ✅ Nodemailer Transporter
const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ API for Interested Form (No Query)
app.post('/send-interested-email', (req, res) => {
  const { name, email, country, zipcode, phone } = req.body;

  if (!name || !email || !country || !zipcode || !phone) {
    return res.status(400).send({ success: false, message: 'Missing required fields' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
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
      return res.status(500).send({ success: false, message: 'Email not sent' });
    } else {
      console.log('✅ Email sent:', info.response);
      return res.send({ success: true, message: 'Email sent successfully' });
    }
  });
});

// ✅ API for Contact Form (Includes Query)
app.post('/send-contact-email', (req, res) => {
  const { name, email, country, zipcode, phone, query } = req.body;

  if (!name || !email || !country || !zipcode || !phone || !query) {
    return res.status(400).send({ success: false, message: 'Missing required fields' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
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
      return res.status(500).send({ success: false, message: 'Email not sent' });
    } else {
      console.log('✅ Email sent:', info.response);
      return res.send({ success: true, message: 'Email sent successfully' });
    }
  });
});

// ✅ Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
