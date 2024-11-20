const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  jobListings: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      requirements: [String],
    },
  ],
});

module.exports = mongoose.model('Company', companySchema);
