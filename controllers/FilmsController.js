
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
        res.send(`${film.title}, has been added succesfully!`);
    }).catch((error) => {
        res.send(error);
    });
}


FilmsController.searchFilm = async (req, res) => {

    //Al tratarse de un GET y pasarle los parámetros por URL, no se usa req.body, sino req.params.
    let films = req.params.model;
    
    Film.findAll({
   
        where : { title : title}
    })
    .then(resultadoBusqueda => {

        if(resultadoBusqueda[0]?.dataValues.title != undefined){
            res.send(resultadoBusqueda);
        }else{
            res.send("Not found.");
        }

    })
    .catch(err => console.log(err));
    
}


//Export
module.exports = FilmsController;