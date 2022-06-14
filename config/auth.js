//Importo el fichero .env para traerme las variables de entorno
require('dotenv').config();
module.exports = {
    //secret: process.env.AUTH_SECRET,
    secret: process.env.AUTH_SECRET || "FraseHash25", //KEY USADA PARA ENCRIPTAR

    //expires: process.env.AUTH_EXPIRES,
    expires: process.env.AUTH_EXPIRES || "200h", //DURACIÓN DEL TOKEN
    //rounds: process.env.AUTH_ROUNDS
    rounds: process.env.AUTH_ROUNDS || 8 //VECES QUE SE ENCRIPTA LA CONTRASEÑA
}

