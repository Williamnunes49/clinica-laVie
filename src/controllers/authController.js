const Psicologos = require('../models/Psicologos')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');
const MESSAGE = require('../constants/messages')

const authController = {
    async login(req, res, next) {
        try {
            const { email, senha } = req.body;

            const psicologo = await Psicologos.findOne({
                where: {
                    email,
                }
            });

            if (!psicologo) {
                return res.status(400).json(MESSAGE.ERROR.DADOS_INVALIDOS)
            }

            if (!bcrypt.compareSync(senha, psicologo.senha)) {
                return res.status(401).json(MESSAGE.ERROR.DADOS_INVALIDOS);

            }

            const token = jwt.sign(
                {
                    id: psicologo.id,
                    email: psicologo.email,
                    nome: psicologo.nome,

                },
                secret.key
            );
            return res.json(`${token}`)

        }
        catch (error) {
            next(error);
        }
    }
};

module.exports = authController;