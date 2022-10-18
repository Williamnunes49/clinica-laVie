const { Psicologos } = require('../models');
const bcrypt = require('bcryptjs');

const psicologosController = {

    // Lista todos os Psicologos
    // tentar esconder a senha depois
    async listarPsicologos(req, res) {
        const { senha } = req.body
        const newPiscologos = await Psicologos.findAll();
        res.status(200).json(newPiscologos);
    },
    // Lista todos os Psicólogos por id
    async listarPsicologosId(req, res) {
        const { id } = req.params

        const newPiscologos = await Psicologos.findByPk(id);
        res.status(200).json(newPiscologos);
    },

    // Cria uma novo Psicólogo
    async cadastraPsicologos(req, res) {
        const { nome, email, senha, apresentacao } = req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        const newPiscologos = await Psicologos.create({
            nome,
            email,
            senha: newSenha,
            apresentacao,
        });
        return res.status(201).json(newPiscologos);
    },

    // Atualizar Psicólogos
    // OBS: retornar os dados atualizados na tela depois, só ta retornando o id
    async atualizarPsicologos(req, res) {
        const { id } = req.params
        const { nome, email, senha, apresentacao } = req.body;

        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha,
            apresentacao,
        },
            {
                where: {
                    id,
                }
            }
        );
        res.status(200).json(psicologoAtualizado)
    },

    // Deleta um Psicólogo pelo id
    async deletarPsicologos(req, res) {
        const { id } = req.params;

        await Psicologos.destroy({
            where: {
                id,
            },
        });

        res.status(204)
    }

};

module.exports = psicologosController;