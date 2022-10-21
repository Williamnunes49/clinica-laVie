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
<<<<<<< HEAD
    observacoes: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "atendimentos",
    timestamps: false,
  }
=======
    observacoes: {  
        type: DataTypes.STRING,
    },
    psicologos_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Psicologos,
            key: 'id'
        },
    },
    pacientes_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Pacientes,
            key:'id'
        }
    },

},
    {
        tableName: "atendimentos",
        timestamps: false,
    }

>>>>>>> 0a070eefc189b9ec0376ae96d5699f08b8f57afb
);

module.exports = Atendimentos;
