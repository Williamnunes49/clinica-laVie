const xlsx = require('xlsx')

// essa função trata os dados do arquivo recebido
function parseXlsx(file) {
    const arquivo = xlsx.readFile(file);
   
    const dados = xlsx.utils.sheet_to_json(arquivo.Sheets[arquivo.SheetNames[0]]);
    return dados;
}
module.exports = parseXlsx;