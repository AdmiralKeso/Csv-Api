const express = require('express');
const router = express.Router();
const { getDataController } = require('../controllers/dataController');

// Route: GET /api/data?limit=10
router.get('/data', getDataController);

module.exports = router;