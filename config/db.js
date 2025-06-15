// PostgreSQL
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
    //logging: process.env.NODE_ENV === 'development',
    logging: false, // Matikan logging SQL ke console
  }
);

module.exports = sequelize;
