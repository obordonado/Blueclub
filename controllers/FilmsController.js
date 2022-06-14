
const { Film } = require('../models/index');

//FilmsController object declaration
const FilmsController = {};

FilmsController.getFilms = (req, res) => {
    //Func findAll -> Sequelize
    Film.findAll()
    .then(data => {
    
        res.send(data)
    });
};

FilmsController.postFilm = async (req, res) => {

    let title = req.body.title;
    let year = req.body.year;
    let genre = req.body.genre;
    let director = req.body.director;
    let duration = req.body.duration;
    let recomended_age = req.body.recomended_age;
    let price = req.body.price;
 

    Film.create({

        title: title,
        year: year,
        genre: genre,
        director: director,
        duration: duration,
        recomended_age: recomended_age,
        price: price

    }).then(film => {
        res.send(`${film.nombre}, has been added succesfully!`);
    }).catch((error) => {
        res.send(error);
    });
}






// FilmsController.searchFilm = async (req, res) => {

//     //En este caso, al tratarse de un GET y pasarle los parámetros por URL,
//     // la forma de hacerlo no es con req.body, sino con req.params
//     let film = req.params.model;
    
//     Film.findAll({
//         //A la clausula where le especificamos el campo donde buscar, en este caso
//         //el campo es nombre, y el valor que comparamos es modelo, que lo hemos
//         //obtenido desde la Url.
//         where : { title : title}
//     })
//     .then(resultadoBusqueda => {

//         //Una vez entramos en el then, en la variable resultadoBusqueda se almacenará el resultado de la búsqueda
//         //Procedemos a hacer un if para comprobar si este resultado tiene contenido o es un array vacio

//         //SIEMPRE DEVUELVE UN ARRAY, en caso de que sea un findAll, findOne NO devuelve un array.

//         //Respecto a la comparacion, estoy buscando si la posicion 0 del array está llena, y por lo tanto dentro de ella
//         //la propiedad dataValues.nombre sería DISTINTA a undefined-.

//         //Obviamente si el array viene vacio, es que no ha encontrado nada.

//         if(resultadoBusqueda[0]?.dataValues.title != undefined){
//             res.send(resultadoBusqueda);
//         }else{
//             res.send("Not found.");
//         }

//     })
//     .catch(err => console.log(err));
    
// }


//Export
module.exports = FilmsController;