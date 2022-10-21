const db = require("../database");
const { DataTypes } = require("sequelize");
const Psicologos = require ("./Psicologos")
const Pacientes = require ("./Pacientes")

const Atendimentos = db.define('Atendimentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento: {
        type: DataTypes.DATE,
        
    },
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

);

module.exports = Atendimentos;