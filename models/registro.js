const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Registro = sequelize.define("Registro", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subdireccion: {
    type: DataTypes.ENUM(
      "ASESORIA",
      "CALL CENTER",
      "DEFENSORIA",
      "EXTENSIONES",
      "FORANEOS",
      "GRABACION",
      "INFORMES",
      "MEDICINA LEGAL",
      "N/C",
      "PROBLEMA COMUNICACIÓN",
      "TRANSPARENCIA",
      "EXTENSION"
    ),
    allowNull: false,
  },
  observaciones: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ext: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const obtenerRegistrosOrdenadosDesc = async () => {
  try {
    const registros = await Registro.findAll({
      order: [
        ["fecha", "DESC"],
        ["hora", "DESC"],
      ],
    });
    return registros;
  } catch (error) {
    console.error("Error al obtener los registros ordenados:", error);
  }
};

module.exports = Registro;
