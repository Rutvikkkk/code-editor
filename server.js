const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/send-feedback', async (req, res) => {
  const { feedback } = req.body;

  // Replace these with your actual email and SMTP server configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'fake.mail@gmail.com',
    subject: 'Feedback received',
    text: feedback,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Feedback email sent successfully');
    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error sending feedback email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
