// models/connection.js
require('dotenv').config('../');

const mysql = require('mysql2/promise');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const connection = mysql.createPool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_DATABASE });

module.exports = connection;