
const { INTEGER, INET } = require('sequelize');
const { NUMBER } = require('sequelize');
const { STRING } = require('sequelize');
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
 ///        res.send("Please introduce all data correctly.")

    if(
        title===""||null
        ||year===""||null||year===STRING
        // ||year!==NUMBER 
        // ||genre===""||null||!STRING 
        // ||director===""||null||!STRING 
        // ||duration===""||null||!INTEGER
        // ||duration===0 
        // ||recomended_age===""||null||!INTEGER 
        // ||price===""||null||!INTEGER
        ){
        return res.send("Please introduce all data correctly");
    };
    

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

    let id  = req.body.id;
    let title = req.body.title;
    
    Film.findOne({
        where:{title:title}
    })
   .then(film => {
    if(!film){
        res.send("That film isn't included in our database.")
    }else{
        res.send({film});
    }
    }).catch((error) => {
        res.send(error);
    });  
};


//Export
module.exports = FilmsController;