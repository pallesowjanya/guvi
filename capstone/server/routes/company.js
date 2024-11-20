const express = require('express');
const { addJobListing, reviewApplication, scheduleInterview } = require('../controllers/company');
const router = express.Router();

router.post('/:companyId/job-listings', addJobListing);
router.put('/:companyId/applications/:appId/review', reviewApplication);
router.post('/:companyId/applications/:appId/schedule', scheduleInterview);

module.exports = router;
