const express = require('express');
const routes = require('./routes');
const app = express();
const db = require('./database');
const error =  require('./middlewares/error')

db.hasConection();
app.use(express.json());

app.use(routes);
app.use(error);

app.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000..')
})