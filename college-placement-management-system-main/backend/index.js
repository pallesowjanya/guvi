require('dotenv').config();  // This will load environment variables from the .env file

const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Public folder for user profile images, resumes, and offer letters
app.use('/profileImgs', express.static(path.join(__dirname, 'public/profileImgs')));
app.use('/resume', express.static(path.join(__dirname, 'public/resumes')));
app.use('/offerLetter', express.static(path.join(__dirname, 'public/offerLetter')));

// MongoDB connection
const mongodb = require('./config/MongoDB');
mongodb();

// Routes
app.use('/user', require('./routes/user.route'));
app.use('/student', require('./routes/student.route'));
app.use('/tpo', require('./routes/tpo.route'));
app.use('/management', require('./routes/management.route'));
app.use('/admin', require('./routes/superuser.route'));
app.use('/company', require('./routes/company.route'));

// Root route (added for testing)
app.get('/', (req, res) => {
  res.send('Welcome to the College Placement Management System API');
});

// Server listening on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

// Log the Mongo URI and port to check if they are loaded
console.log("Mongo URI: ", process.env.MONGO_URI);  // Check MongoDB URI
console.log("Server Port: ", process.env.PORT);  // Check Server Port
console.log("JWT Secret: ", process.env.JWT_SECRET); 
