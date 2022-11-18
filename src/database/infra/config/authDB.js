const authDB = {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: Number( process.env.DB_PORT)
};
module.exports = authDB;