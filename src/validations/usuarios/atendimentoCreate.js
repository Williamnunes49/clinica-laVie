const { validate, Joi } = require("express-validation");

// Aqui faz todas a validações antes de cadastrar um novo Paciente
module.exports = validate({
    body: Joi.object({
        data_atendimento: Joi.date().required(),
        observacoes: Joi.string().required(),
        pacientes_id: Joi.number().required()
    })
});