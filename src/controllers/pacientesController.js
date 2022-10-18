const { Pacientes } = require('../models')

const pacientesController = {
    // lista todos os Pacientes
    async listarPacientes(req, res) {
        const newPacientes = await Pacientes.findAll();

        return res.status(200).json(newPacientes);
    },

    // Lista o Paciente pelo id
    async listarPacientesId(req, res) {
        const { id } = req.params
        const newPacientes = await Pacientes.findByPk(id);
        if (!newPacientes) {
            return res.status(404).json('Id não encontrado');
        }
        return res.status(200).json(newPacientes);
    },

    // Cadastra um novo Paciente
    async cadastrarPacientes(req, res) {
        const { nome, email, data_nascimento, } = req.body;

        const newPacientes = await Pacientes.create({
            nome,
            email,
            data_nascimento,
        });
        return res.status(201).json(newPacientes);
    },

    // Atualiza um novo paciente pelo id 
    async atualizarPacientes(req, res) {
        const { id } = req.params
        const { nome, email, data_nascimento, } = req.body;

        if (!id) return res.status(400).json("id não existe!")

        const newPacientes = await Pacientes.update({
            nome,
            email,
            data_nascimento,
        },
            {
                where: {
                    id,
                }
            },
        );
        return res.status(200).json(newPacientes)
    },

    // Exclui Pacientes pelo id  
    async deletarPacienets(req, res) {
        
            const { id } = req.params;
            await Pacientes.destroy({
                where: {
                    id,
                },
            });
            /*if(!id) {
                res.status(404).json("id não enconrado")
            };*/
            res.status(204);

        
    }
};

module.exports = pacientesController;