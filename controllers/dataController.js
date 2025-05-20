const { getData } = require('../services/getData');

function getDataController(req, res) {
    const limitParam = req.query.limit;

// Validate the "limit" parameter if it's provided
  let limit;
  if (limitParam !== undefined) {
    limit = parseInt(limitParam, 10);
    if (isNaN(limit) || limit <= 0) {
      return res.status(400).json({ error: 'Limit must be a positive integer.' });
    }
  }

  try {
    const data = getData(limit);
    res.json(data);
  } catch (err) {
    if (err.status === 204) {
      return res.status(204).send();
    }

    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
}

module.exports = { getDataController };