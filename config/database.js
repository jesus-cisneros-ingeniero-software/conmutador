const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("conmutador", "root", "123jesus", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
