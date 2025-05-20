# Csv-Api
A simple Node.js API that reads data from a CSV file and serves it as JSON over HTTP.
## Features
- Reads data from a local `data.csv` file
- Converts CSV rows to JavaScript objects (`Person`)
- Serves the data via an Express route (`/api/data`)
- Supports a `limit` query parameter to restrict the number of results
- Handles errors (file missing, invalid limit, empty data)
# Project Structure
## app.js
Main entry point of Node.js application. It sets up and starts the Express server.

```
const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
```
Enable JSON responses.
```
app.use(express.json());
```
Use routes defined in /routes/dataRoutes.js under the /api path.
```
app.use('/api', dataRoutes);
```
Start the server on port 3000.
```
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/api/data`);
});
```
To start the server:
```bash
npm install
npm start
