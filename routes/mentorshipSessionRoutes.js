const express = require('express');
const router = express.Router();
const mentorshipSessionController = require('../controllers/mentorshipSessionController');

router.post('/', mentorshipSessionController.createSession);

module.exports = router;
