const express = require('express');
const routes = express.Router();

// importando dados do controller
const pacientesController = require('../controllers/pacientesController');
const psicologosController = require('../controllers/psicologosController');
const atendimentosController = require('../controllers/atendimentosController');

// importando dados de autenticaçõo
const psicologoValidation = require('../validations/usuarios/psicologosCreate');
const idValidation = require('../validations/usuarios/idValidation');
const pacienteValidation =  require('../validations/usuarios/pacientesCreate');
const atendimentoValidation = require('../validations/usuarios/atendimentoCreate')
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');

// Aqui começa o CRUD dos Psicologos
routes.get('/psicologos', psicologosController.listarPsicologos);
routes.get('/psicologos/:id', idValidation, psicologosController.listarPsicologosId);
routes.post('/psicologos', psicologoValidation, psicologosController.cadastraPsicologos);
routes.put('/psicologos/:id', idValidation, psicologosController.atualizarPsicologos);
routes.delete('/psicologos/:id',idValidation, psicologosController.deletarPsicologos);

// Aqui começa o CRUD dos pacientes
routes.get('/pacientes', pacientesController.listarPacientes);
routes.get('/pacientes/:id', idValidation, pacientesController.listarPacientesId);
routes.post('/pacientes', pacienteValidation, pacientesController.cadastrarPacientes);
routes.put('/pacientes/:id', idValidation, pacientesController.atualizarPacientes);
routes.delete('/pacientes/:id', idValidation, pacientesController.deletarPacienets);
routes.post('/pacientes/cadastrar-lote', upload.single('file'), pacientesController.cadastrarEmLote)

// Aqui começa o CRUD dos atendimentos
routes.get('/atendimentos', atendimentosController.listarAtendimentos);
routes.get('/atendimentos/:id', idValidation, atendimentosController.listarAtendimentoId);
routes.post('/atendimentos', atendimentoValidation, auth, atendimentosController.cadastrarAtendimentos);

module.exports = routes;