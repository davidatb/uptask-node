const Sequelize = require("sequelize");

const db = require("../config/db");

// el nombre del modelo, usualmente los modelos se inician con mayusculas
const Proyectos = db.define("proyectos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: Sequelize.STRING,

  url: Sequelize.STRING,
});

module.exports = Proyectos;