const { Pacientes, Psicologos } = require("../models");

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
            const newPacientes = await Pacientes.findByPk(id);
            
            if (!newPacientes) {
                return res.status(404).json("Id não encontrado");
            }
            return res.status(200).json(newPacientes);
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
            const { nome, email, data_nascimento } = req.body;

            if (!id) return res.status(400).json("id não existe!");

            const newPacientes = await Pacientes.update(
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
            const pacienteAtualizado = await Pacientes.findOne({
                where: {
                    id,
                },
            });
            return res.status(200).json(pacienteAtualizado);
        
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
