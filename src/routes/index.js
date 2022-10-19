const express = require('express');
const routes = express.Router();

// importando dados do controller
const pacientesController = require('../controllers/pacientesController');
const psicologosController = require('../controllers/psicologosController');



// importando dados de autenticaçõo
const psicologoValidation = require('../validations/usuarios/psicologosCreate');
const idValidation = require('../validations/usuarios/idValidation');







// Aqui começa o CRUD dos Psicologos
routes.get('/psicologos', psicologosController.listarPsicologos);
routes.get('/psicologos/:id', idValidation, psicologosController.listarPsicologosId);
routes.post('/psicologos', psicologoValidation, psicologosController.cadastraPsicologos);
routes.put('/psicologos/:id', psicologosController.atualizarPsicologos);
routes.delete('/psicologos/:id', psicologosController.deletarPsicologos);

// Aqui começa o CRUD dos pacientes
routes.get('/pacientes', pacientesController.listarPacientes);
routes.get('/pacientes/:id', pacientesController.listarPacientesId);
routes.post('/pacientes', pacientesController.cadastrarPacientes);
routes.put('/pacientes/:id', pacientesController.atualizarPacientes);
routes.delete('/pacientes/:id', pacientesController.deletarPacienets);



module.exports = routes;