const express = require('express');
const router = express.Router();
const entrepreneurController = require('../controllers/entrepreneurController');

router.post('/', entrepreneurController.createProfile);

module.exports = router;
