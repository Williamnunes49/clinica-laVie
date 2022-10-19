const  Psicologos  = require('../models/Psicologos')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');

const authController = {
    async login(req, res) {
        const { email, senha } = req.body;

        const psicologo = await Psicologos.findOne({
            where: {
                email,
            }
        });
        
        if (!psicologo) {
            return res.status(400).json('Email não cadastrado')
        }
        
        if (!bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(401).json('Senha inválida');
        
        }

        const token = jwt.sign(
            {
                id: psicologo.id,
                email: psicologo.emal,
                nome: psicologo.nome,
                
            },
            secret.key
        );
        return res.json(token)

          
       
    }
};

module.exports = authController;