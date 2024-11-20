const Company = require('../models/company');

exports.addJob = async (req, res) => {
  const { name, title, description, requirements } = req.body;
  try {
    let company = await Company.findOne({ name });
    if (!company) {
      company = new Company({ name });
    }
    company.jobListings.push({ title, description, requirements });
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ error: 'Error adding job' });
  }
};
