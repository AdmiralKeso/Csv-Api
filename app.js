const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');

// Use JSON responses
app.use(express.json());

// Route prefix
app.use('/api', dataRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/api/data`);
});