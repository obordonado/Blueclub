const express = require('express');

const app = express();

const port = 3000;

const db = require('./db/db');

const router = require('./router.js');

//Middleware SIEMPRE COPIAR Y PEGAR.

app.use(express.json());  //-- Permite trabajar en json

app.use(router);

db.then(()=>{

    app.listen(port, ()=> {console.log("Servidor levantado en el puerto ", port)});

}).catch((err) => console.log(err.message));

