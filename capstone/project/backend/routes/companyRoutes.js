const express = require('express');
const { addJob } = require('../controllers/companyController');

const router = express.Router();

router.post('/addJob', addJob);

module.exports = router;
