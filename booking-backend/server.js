const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables from .env file

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const uri = "mongodb+srv://vermaanurag521:anurag123@cluster0.sqbeg.mongodb.net/";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//Schema

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  holidayType: String,
  destination: String,
  privacyPolicy: Boolean,
});

const Booking = mongoose.model('Booking', bookingSchema);

// API Endpoint to Handle Form Submission
app.post('/submit-booking', async (req, res) => {
  console.log("Inside the post method");
  try {
    

    const formData = req.body;
    console.log('Received form data:', formData);
   
    const newBooking = new Booking(req.body);
    await newBooking.save();
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
//  npm run start
//  node server.js