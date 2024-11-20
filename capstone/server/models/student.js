const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  resume: String, // URL of uploaded resume
  coverLetter: String,
  applicationStatus: { type: String, enum: ['submitted', 'reviewed', 'shortlisted'], default: 'submitted' },
  interviewSchedule: {
    date: Date,
    time: String,
    type: { type: String, enum: ['in-person', 'virtual'], default: 'virtual' }
  }
});

module.exports = mongoose.model('Student', studentSchema);
