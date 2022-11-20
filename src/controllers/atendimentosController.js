const { Atendimentos, Psicologos, Pacientes } = require('../models');
const jwtDecode = require("jwt-decode");
const MESSAGE = require('../constants/messages')


const atendimentosController = {
    // Lista todos os atendimentos criados
    async listarAtendimentos(req, res, next) {
        try {
            const newAtendimentos = await Atendimentos.findAll({
                include: [
                    {
                        model: Psicologos,
                    },
                    {
                        model: Pacientes,
                    }

                ]

            });
            return res.status(200).json(newAtendimentos);
        }
        catch (error) {
            next(error);
        }
    },

    // Lista um atendimento por Id
    async listarAtendimentoId(req, res, next) {
        try {
            const { id } = req.params
            const newAtendimento = await Atendimentos.findByPk(id, {
                include: [
                    {
                        model: Psicologos,
                    },
                    {
                        model: Pacientes
                    }
                ]
            });
            if (!newAtendimento) {
                return res.status(404).json(MESSAGE.ERROR.ATENDIMENTO_ERROR);
            }
            return res.status(200).json(newAtendimento);
        }
        catch (error) {
            next(error);
        }
    },

    // Cadastra um novo atendimento, usando o token de validacao
    async cadastrarAtendimentos(req, res, next) {
        try {
            const { data_atendimento, observacoes, pacientes_id, } = req.body;

            const token = req.headers["authorization"];
            const idToken = jwtDecode(token).id
            if (!idToken) {
                return res.status(400).json(MESSAGE.ERROR.ID_LOGADO)
            }
    
            const newAtendimento = await Atendimentos.create({
                data_atendimento,
                observacoes,
                pacientes_id,
                psicologos_id: idToken,
            });
            return res.status(201).json(newAtendimento);

        }
        catch (error) {
            next(error);
        }
    },
};

module.exports = atendimentosController;