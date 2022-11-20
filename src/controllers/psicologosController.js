const { Psicologos } = require('../models');
const bcrypt = require('bcryptjs');
const MESSAGE = require('../constants/messages');

const psicologosController = {

    // Lista todos os Psicologos
    // tentar esconder a senha depois
    async listarPsicologos(req, res, next) {
        try {
            const { senha } = req.body

            const newPiscologos = await Psicologos.findAll({
                attributes: ['id', 'nome', 'email', 'apresentacao']
            });
            
            res.status(200).json(newPiscologos);
        }
        catch (error) {
            next(error);
        }
    },
    // Lista todos os Psicólogos por id
    async listarPsicologosId(req, res, next) {
        try {
            const { id } = req.params;

            const newPiscologos = await Psicologos.findByPk(id);

            if (!newPiscologos) {
                return res.status(404).json(MESSAGE.ERROR.ID_ERROR)
            }
            res.status(200).json(newPiscologos);
        }
        catch (error) {
            next(error);
        }
    },

    // Cria uma novo Psicólogo
    async cadastraPsicologos(req, res, next) {
        try {
            const { nome, email, senha, apresentacao } = req.body;

            const newSenha = bcrypt.hashSync(senha, 10);

            const newPiscologos = await Psicologos.create({
                nome,
                email,
                senha: newSenha,
                apresentacao,
            });
            return res.status(201).json(newPiscologos);
        }
        catch (error) {
            next(error);
        }
    },

    // Atualizar Psicólogos
    async atualizarPsicologos(req, res, next) {
        try {
            const { id } = req.params
            const { nome, email, senha, apresentacao } = req.body;
            const newSenha = bcrypt.hashSync(senha, 10)

            await Psicologos.update({
                nome,
                email,
                senha: newSenha,
                apresentacao,
            },
                {
                    where: {
                        id,
                    }
                }
            );
            const psicologo = await Psicologos.findOne({
                where: {
                    id
                }
            })
            if (!psicologo) {
                return res.status(404).json(MESSAGE.ERROR.ID_ERROR);
            }

            return res.status(200).json(psicologo);
        }
        catch (error) {
            next(error);
        }
    },

    // Deleta um Psicólogo pelo id
    async deletarPsicologos(req, res, next) {
        try {
            const { id } = req.params;

            const psicologo = await Psicologos.findOne({
                where: {
                    id,
                }
            })

            await Psicologos.destroy({
                where: {
                    id,
                },
            });
            if (!psicologo) {
                res.status(404).json(MESSAGE.ERROR.ID_ERROR);
            }
            return res.sendStatus(204)
        }
        catch (error) {
            next(error);
        }

    }

};

module.exports = psicologosController;