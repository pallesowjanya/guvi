const Company = require('../models/company');
const Student = require('../models/student');

exports.addJobListing = async (req, res) => {
  const { companyId } = req.params;
  const { position, description, requirements, salary } = req.body;

  const company = await Company.findById(companyId);
  company.jobListings.push({ position, description, requirements, salary });
  await company.save();
  res.json({ message: 'Job listing added' });
};

exports.reviewApplication = async (req, res) => {
  const { companyId, appId } = req.params;
  const { status } = req.body;

  const company = await Company.findById(companyId);
  const application = company.applications.id(appId);
  application.status = status;
  await company.save();
  res.json({ message: 'Application reviewed' });
};

exports.scheduleInterview = async (req, res) => {
  const { companyId, appId } = req.params;
  const { date, time, type } = req.body;

  const student = await Student.findById(appId);
  student.interviewSchedule = { date, time, type };
  await student.save();
  res.json({ message: 'Interview scheduled' });
};
