const { Atendimentos } = require('../models')

const atendimentosController = {

    async listarAtendimentos(req, res) {
        const newAtendimentos = await Atendimentos.findAll();
        return res.status(200).json(newAtendimentos);
    },

    async listarAtendimentoId(req, res) {
        const { id } = req.params
        const newAtendimento = await Atendimentos.findByPk(id);
        if (!newAtendimento) {
            return res.status(404).json('Atendimento não encontrado');
        }
        return res.status(200).json(newAtendimento);
    },

    //arrumar ordem
    async cadastrarAtendimentos(req, res) {
        const { pacientes_id, data_atendimento, observacoes} = req.body;
        //const psicologos_id = vem_da_sessao_logada;
        const newAtendimento = await Atendimentos.create({
            data_atendimento,
            observacoes,
            //psicologos_id,
            pacientes_id,
        });
        return res.status(201).json(newAtendimento);
    },
};

module.exports = atendimentosController;