const express = require('express');
const router = express.Router();
const fundingController = require('../controllers/fundingController');

router.post('/', fundingController.createOpportunity);

module.exports = router;
