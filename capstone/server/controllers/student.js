const Student = require('../models/student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerStudent = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const student = new Student({ name, email, password: hashedPassword });
  await student.save();
  res.json({ message: 'Student registered successfully' });
};

exports.loginStudent = async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email });
  if (!student) return res.status(400).json({ message: 'Student not found' });

  const isMatch = await bcrypt.compare(password, student.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
  res.json({ token });
};

exports.getApplications = async (req, res) => {
  const studentId = req.params.studentId;
  const student = await Student.findById(studentId);
  res.json(student.applications);
};

exports.updateApplicationStatus = async (req, res) => {
  const { studentId, appId } = req.params;
  const { status } = req.body;
  const student = await Student.findById(studentId);

  student.applications.id(appId).status = status;
  await student.save();
  res.json({ message: 'Application status updated' });
};
