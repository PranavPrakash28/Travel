const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer'); 
require('dotenv').config(); // To load environment variables from .env file

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const uri = process.env.MONGO_URI || "mongodb+srv://vermaanurag521:anurag123@cluster0.sqbeg.mongodb.net/";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  holidayType: String,
  destination: String,
  privacyPolicy: Boolean,
});

const Booking = mongoose.model('Booking', bookingSchema);

// Configure Nodemailer transport
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL_USER, // Your email from environment variables
//     pass: process.env.EMAIL_PASS, // Your password or app-specific password
//   },
// });


let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'river.hermiston4@ethereal.email',
      pass: 'vMtWWZmQHyKsN6rTET'
  }
});

// Email sending function
const sendMail = async (bookingData) => {
  try {
    const mailOptions = {
      from: bookingData.email, // Sender address
      to:  process.env.EMAIL_USER, // Fixed recipient email (change this to your recipient email)
      subject: 'New Booking Submission',
      text: `New booking received!
      Greeting Admin,
      Here are the booking details:
      Name: ${bookingData.name}
      Email: ${bookingData.email}
      Mobile: ${bookingData.mobile}
      Holiday Type: ${bookingData.holidayType}
      Destination: ${bookingData.destination}
      Privacy Policy: ${bookingData.privacyPolicy ? 'Accepted' : 'Not Accepted'}
      
      Please check and follow up with the customer.`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Booking details sent to admin successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};       

// API Endpoint to Handle Form Submission
app.post('/submit-booking', async (req, res) => {
  console.log("Inside the post method");
  try {
    const formData = req.body;
    console.log('Received form data:', formData);
    
    const newBooking = new Booking(formData);
    await newBooking.save();

    // Send email with booking details
    await sendMail(formData);

    res.json({ message: 'Booking form submitted successfully!', data: formData });
  } catch (error) {
    console.error('Error submitting the form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Commands to start the backend 
// Go to the sidepanel and right click on the booking-backend and then click on open in integrated terminal 
// Then write cmd commands given below in order
//  npm run start
//  node server.js
