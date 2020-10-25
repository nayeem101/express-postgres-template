const { Sequelize } = require("sequelize");
//make sure to create the database before using it on project
/* here DBURI=postgres://dbowner:password@localhost:5432/dbname  */
//localhost:5432 is postgres default port
//db connection
const db = new Sequelize(process.env.DBURI, { dialect: "postgres" });

module.exports = db;
