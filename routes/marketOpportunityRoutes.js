const express = require('express');
const router = express.Router();
const marketOpportunityController = require('../controllers/marketOpportunityController');

router.post('/', marketOpportunityController.createOpportunity);

module.exports = router;
