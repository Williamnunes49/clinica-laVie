const Sequelize = require("sequelize");
const logger = require("./infra/logger");
const authDB = require('./infra/config/authDB')

const DB_CONIG = {
  dialect: "mysql",
  host: authDB.host,
  port: authDB.port,
};

let db = {};
console.log(process.env.DB_NAME)
try {
  db = new Sequelize(authDB.name, authDB.user, authDB.pass, DB_CONIG);
} catch (error) {
  logger.error("Error de conexão com o banco!", error)
}

async function hasConection() {
  try {
    await db.authenticate();
    logger.info("Banco de dados conectado com sucesso!")

  } catch (error) {
    logger.error("Erro na conexão ao banco de  dados!", error)
  }
}
Object.assign(db, {
  hasConection,
});
module.exports = db;
