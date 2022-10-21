const { validate, Joi } = require("express-validation");

// Aqui faz todas a validações antes de cadastrar um novo Paciente
module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        data_nascimento: Joi.date().required()
    })
});