require('dotenv').config();

// other dependencies
const fs = require('fs');
const chalk = {
  red: console.log,
  cyan: console.log,
  green: console.log
};
const {Client} = require('pg');

// PG connection setup
const connectionString = process.env.DATABASE_URL ||
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
const client = new Client({ connectionString });

// Loads the schema files from db/schema
const runSchemaFiles = function () {
  const schemaFiles = fs.readdirSync('./db/schema');
  schemaFiles.forEach(function (file) {
    const sql = fs.readFileSync(`./db/schema/${file}`, 'utf8');
    client.query(sql, function (err, result) {
      if (err) {
        console.log(chalk.red(err));
      } else {
        console.log(chalk.green(`${file} loaded`));
      }
    });
  });
};
// run seed files
const runSeedFiles = function () {
  const seedFiles = fs.readdirSync('./db/seeds');
  seedFiles.forEach(function (file) {
    const sql = fs.readFileSync(`./db/seeds/${file}`, 'utf8');
    client.query(sql, function (err, result) {
      if (err) {
        console.log(chalk.red(err));
      } else {
        console.log(chalk.green(`${file} loaded`));
      }
    });
  });
};

try {
  console.log(`-> Connecting to PG using ${connectionString} ...`);
  client.connect();
  runSchemaFiles();
  runSeedFiles();
  client.end();
} catch (err) {
  console.error((`Failed due to error: ${err}`));
  client.end();
}

module.exports = client;