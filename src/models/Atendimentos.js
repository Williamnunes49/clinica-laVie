const db = require("../database");
const { DataTypes } = require("sequelize");
const { Psicologos, Pacientes } = require('../models')

const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    psicologos_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "id",
      },
    },
    pacientes_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: "id",
      },
    },
    data_atendimento: {
      type: DataTypes.DATE,
    },
    observacoes: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "atendimentos",
    timestamps: false,
  }
);

module.exports = Atendimentos;
