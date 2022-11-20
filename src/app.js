const express = require('express');
const routes = require('./routes');
const app = express();
const db = require('./database');
const error =  require('./middlewares/error');
const router = require('../src/routes/auth.rout');
const MESSAGE = require('./constants/messages');

db.hasConection();
app.use(express.json());
app.use(express.urlencoded());

app.use(routes);
app.use(router);
app.use(error);

app.listen(3000, ()=> {
    console.log(MESSAGE.DATABASE.SERVIDOR_PORT)
})