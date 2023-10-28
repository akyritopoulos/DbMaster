const { Pool } = require('pg');
require('dotenv').config();

const dbConfig = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_DB,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

const pool = new Pool(dbConfig)
  .connect()
  .then((p) => {
    console.log('Connected to database');
    return p;
  })
  .catch((err) => console.log(err));

module.exports = pool;
