const Sequelize = require("sequelize");
const logger = require("./infra/logger");
const authDB = require('./infra/config/authDB');
const MESSAGE = require("../constants/messages");

const DB_CONIG = {
  dialect: "mysql",
  host: authDB.host,
  port: authDB.port,
};

let db = {};

try {
  db = new Sequelize(authDB.name, authDB.user, authDB.pass, DB_CONIG);
} catch (error) {
  logger.error(`${MESSAGE.DATABASE.INSTANCIA_ERROR}`, error)
}

async function hasConection() {
  try {
    await db.authenticate();
    logger.info(MESSAGE.DATABASE.SUCESSO)

  } catch (error) {
    logger.error(`${MESSAGE.DATABASE.CONEXAO_ERROR}`, error)
  }
}
Object.assign(db, {
  hasConection,
});
module.exports = db;
