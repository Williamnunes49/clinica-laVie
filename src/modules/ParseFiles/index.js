const parseXlsx = require('./leitoresFs/xlsx');
const Pacientes = require('../../models')
const path = require('path')

// Verifica se a extenção é do tipo xlsx.
async function parseFiles(file) {
    try {
        const extensao = file.split(".").pop();

        let dados = [];
        switch (extensao) {
            case 'xlsx':
                dados = parseXlsx(file)
                break;
            default:
                console.log("Extensão não mapeada")
        }
        salvarDados(dados)
    } catch (error) {
        console.error(error)
    }
}
// Insere varios Pacientes de uma vez só ao banco de dados - utilizando dados vindo de uma planilha!
async function salvarDados(dados) {
    try {
         await Pacientes.Pacientes.bulkCreate(dados)

    } catch (error) {
        console.error(error);
    }

}
module.exports = parseFiles