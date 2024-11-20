const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Routes
const studentRoutes = require('./backend/routes/studentRoutes');
const companyRoutes = require('./backend/routes/companyRoutes');
app.use('/api/students', studentRoutes);
app.use('/api/companies', companyRoutes);

const PORT = process.env.PORT || 6000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
