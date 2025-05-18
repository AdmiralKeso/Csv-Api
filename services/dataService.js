const { readCSV } = require('../utils/csvReader'); //Uses the csvReader
const Person = require('../models/person'); //Reads from models/Person

function getData(limit) {
  const rows = readCSV('../resources/data.csv'); //Edit if you want another data

  if (rows.length === 0) {
  const error = new Error("204 No Content.");
  error.status = 204;
  throw error;
}

  const people = rows.map(row => //Creates a person from data.
    new Person(row.id, row.name, parseInt(row.age), row.email)
  );

  return limit
    ? people.slice(0, limit) 
    : people;
}

module.exports = { getData };