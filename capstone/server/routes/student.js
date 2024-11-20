const express = require('express');
const { registerStudent, loginStudent, getApplications, updateApplicationStatus } = require('../controllers/student');
const router = express.Router();

router.post('/register', registerStudent);
router.post('/login', loginStudent);
router.get('/:studentId/applications', getApplications);
router.put('/:studentId/applications/:appId/status', updateApplicationStatus);

module.exports = router;
