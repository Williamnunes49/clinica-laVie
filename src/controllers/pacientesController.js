const { Pacientes, Psicologos } = require("../models");
const parseFiles = require("../modules/ParseFiles/index");
const path = require("path");
const {formatDateBr} = require("../helpers/formatDateBr");
const MESSAGE = require("../constants/messages");

const pacientesController = {
    // lista todos os Pacientes
    async listarPacientes(req, res, next) {
        try {
            const newPacientes = await Pacientes.findAll();
            return res.status(200).json(newPacientes);
        } catch (error) {
            next(error);
        }
    },

    // Lista o Paciente pelo id
    async listarPacientesId(req, res, next) {
        try {
            const { id } = req.params;
            const newPacientes = await Pacientes.findByPk(id)

            if(!newPacientes) {
                return res.status(404).json(MESSAGE.ERROR.ID_ERROR)
            }

            const dataCadastro = formatDateBr(new Date(newPacientes.createdAt))
           
            return res.status(200).json({newPacientes, dataCadastro});
        } catch (error) {
            next(error);
        }
    },

    // cadastra pacientes recebendo upload de arquivos
    async cadastrarEmLote(req, res, next) {
        try {
            const { file } = req;

            if (!file?.destination) return;

            await parseFiles(path.resolve("uploads", file.filename));
            return res.sendStatus(201);
        } catch (error) {
            next(error);
        }
    },

    // Cadastra um novo Paciente
    async cadastrarPacientes(req, res, next) {
        try {
            const { nome, email, data_nascimento } = req.body;

            const newPacientes = await Pacientes.create({
                nome,
                email,
                data_nascimento,
                
            });
            return res.status(201).json(newPacientes);
        } catch (error) {
            next(error);
        }
    },

    // Atualiza um novo paciente pelo id
    async atualizarPacientes(req, res, next) {
        try {
            const { id } = req.params;
            const { nome, email, data_nascimento } = req.body

            await Pacientes.update(
                {
                    nome,
                    email,
                    data_nascimento,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const pacientesAtualizados =  await Pacientes.findByPk(id);
            
            if(!pacientesAtualizados)  return res.status(404).json(MESSAGE.ERROR.ID_ERROR)
            
            return res.status(200).json(pacientesAtualizados);
        
        } catch (error) {
            next(error);
        }
    },

    // Exclui Pacientes pelo id
    async deletarPacienets(req, res, next) {
        try {
            const { id } = req.params;
            await Pacientes.destroy({
                where: {
                    id,
                },
            });
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    },
};

module.exports = pacientesController;
