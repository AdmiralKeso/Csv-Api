//Node modules
const fs = require('fs');
const path = require('path');

function readCSV(filePath) {
      const absolutePath = path.resolve(filePath);
      
// If file isnt found or missing throw an error.
  if (!fs.existsSync(absolutePath)) {
    const error = new Error("500 Internal Server Error");
    error.status = 500;
    throw error;
  }

// Reads the whole file as a string.
const content = fs.readFileSync(absolutePath, 'utf8'); // Reads it as a string (UTF-8 Encoding)
const lines = content.trim().split('\n'); //Split into Lines 
const headers = lines[0].split(','); //Splits it into an array ['id', 'name', 'age', 'email']

if (lines.length <= 1) return []; // Only header or empty

// Skip the header line and process the rest
const data = [];

for (let i = 1; i < lines.length; i++) {
  const values = lines[i].split(','); // Split row by comma
  const person = {}; // Make a new object

  for (let j = 0; j < headers.length; j++) {
    person[headers[j]] = values[j]; // Match header with value
  }

  data.push(person); // Add it to the result
}

return data;
}

module.exports = { readCSV };