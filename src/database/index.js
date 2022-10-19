const Sequelize = require("sequelize");

const DB_NAME = "clinica_laVie";
const DB_USER = "root";
const DB_PASS = "Dookie2.0@@";
const DB_CONIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONIG);
} catch (error) {
  console.error("Error de conexão com o banco!");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado com sucesso!");
  } catch (error) {
    console.error("Erro na conexão ao banco de  dados!");
  }
}
Object.assign(db, {
  hasConection,
});
module.exports = db;
