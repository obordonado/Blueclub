const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000; //Configuramos puerto heroku

const db = require('./db/db');
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};
const router = require('./router.js');

//Middleware SIEMPRE COPIAR Y PEGAR.

app.use(express.json());  //-- Permite trabajar en json
app.use(cors(corsOptions));

app.use(router);

db.then(()=>{

    app.listen(PORT, ()=> {console.log("Servidor levantado en el puerto ", PORT)});

}).catch((err) => console.log(err.message));

