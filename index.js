const express = require('express');

const port = process.env.PORT || 4000; //Configuramos puerto heroku

const cors = require("cors");

const app = express();
const db = require('./db/db');
const router = require('./router.js');

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

//Middleware SIEMPRE COPIAR Y PEGAR.

app.use(express.json());  //-- Permite trabajar en json

app.use(router);
app.use(cors(corsOptions));

db.then(()=>{

    app.listen(port, ()=> {console.log("Servidor levantado en el puerto ", port)});

}).catch((err) => console.log(err.message));

