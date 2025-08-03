const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const newsletterRoutes = require('./Routes/newsletter');
const waitlistRoutes = require('./Routes/waitlistRoutes');    
const contactRoute = require('./Routes/contact');



app.use('/api/newsletter', newsletterRoutes);
app.use('/api/waitlist', waitlistRoutes);
app.use('/api/contact', contactRoute);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
