const db = require("../database");
const { DataTypes } = require("sequelize");

const Atendimentos = db.define('Atendimentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento: {
        type: DataTypes.DATE,
        
    },
    observações: {  
        type: DataTypes.STRING,
    },
    psicologos_id:{
        type: DataTypes.INTEGER,
        foreingKey: true
    },
    pacientes_id:{
        type: DataTypes.INTEGER,
        foreingKey: true,
    },

},
    {
        tableName: "atendimentos",
        timestamps: false,
    }

);

module.exports = Atendimentos;