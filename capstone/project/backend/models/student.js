const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  resume: { type: String },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
});

module.exports = mongoose.model('Student', studentSchema);
