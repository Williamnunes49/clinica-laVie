const MESSAGE = {
    ERROR: {
        DADOS_INVALIDOS: "A senha ou o endereço de e-mail estão incorretos.",
        ID_ERROR: "Id não encontrado.",
        ATENDIMENTO_ERROR: "Atendimento não encontrado",
        ID_LOGADO: "Id não encontrado ou Psicólogo não logado!"
    },
    DATABASE: {
        INSTANCIA_ERROR: "Erro ao instanciar o Sequelize",
        CONEXAO_ERROR: "Erro na conexão ao banco de dados!",
        SUCESSO: "Banco de dados conectado com sucesso!",
        SERVIDOR_PORT: "Servidor rodando na porta 3000.."
    }
}
module.exports = MESSAGE;