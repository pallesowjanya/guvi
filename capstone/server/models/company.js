const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  jobListings: [{
    position: String,
    description: String,
    requirements: String,
    salary: Number,
  }],
  applications: [{
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    applicationStatus: String
  }]
});

module.exports = mongoose.model('Company', companySchema);
