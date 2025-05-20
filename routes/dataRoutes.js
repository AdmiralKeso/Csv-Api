const express = require('express');
const router = express.Router();
const { getDataHandler } = require('../controllers/dataController');

// Route: GET /api/data?limit=10
router.get('/data', getDataHandler);

module.exports = router;