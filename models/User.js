// this is an example model
const { DataTypes } = require("sequelize");

const db = require("../configs/db");

//make sure to create the database before using it on project
const Users = db.define("users", {
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  dob: {
    type: DataTypes.DATE,
  },
});

module.exports = Users;
