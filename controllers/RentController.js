
const { Rent } = require('../models/index');

//UserController object declaration
const RentController = {};

RentController.getAllRent = async (req, res) => {
    
    let id = req.params.id;

    let consulta = `SELECT user.name AS UserName, film.name AS FilmName, rent.createdAt AS rent_date
    
    FROM user 
    INNER JOIN Rent ON User.id = Rent.userId
    INNER JOIN Film ON Film.id = Rent.FilmId
    WHERE clienteId LIKE ${id};`;

    //A continuación viene un ejemplo de ESTRUCTURA para ejecutar querys raw (crudo) de SQL en Sequelize, en este caso
    //la consulta está almacenada dentro de la variable llamada consulta. Lo que nos devuelva la consulta se guardará en la variable
    //resultado.

    let resultado = await Rent.sequelize.query(consulta, {
        type: Rent.sequelize.QueryTypes.SELECT
    });

    if(resultado != 0){
        res.send(resultado);
    }else {
        res.send("Search error, please try again.");
    };

};

//Export
module.exports = RentController;