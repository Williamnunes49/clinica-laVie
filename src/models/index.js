const Pacientes = require('./Pacientes');
const Psicologos = require('./Psicologos');
const Atendimentos = require('./Atendimentos');

Psicologos.hasMany(Atendimentos, {
    foreignKey: "psicologos_id",
})
Atendimentos.belongsTo(Psicologos, {
    foreignKey: "psicologos_id",
})

Pacientes.hasMany(Atendimentos,{
    foreignKey: "pacientes_id"
})
Atendimentos.belongsTo(Pacientes,{
    foreignKey: "pacientes_id"
})

module.exports = {
    Pacientes,
    Psicologos,
    Atendimentos,
};