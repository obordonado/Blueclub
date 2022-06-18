
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

    if(
        title===""||null
        ||year===""||null
        ||genre===""||null 
        ||director===""||null 
        ||duration===""||null
        ||duration===0 
        ||recomended_age===""||null
        ||recomended_age===0
        ||price===""||null
        )
    {
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
        res.send(`${film.title}, has been added successfully!`);
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
        res.send("That movie doesn't exist in our database. Did you type the name correctly?")
    }else{
        res.send({film});
    }
    }).catch((error) => {
        res.send(error);
    });  
};




FilmsController.getById = (req, res) => {
    const id = req.params.id;

    Film.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find id ${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving movie with id=" + id
        });
      });
  };






















// FilmsController.delete = async (req, res) => {

//     let id  = req.body.id;
//     let title = req.body.title;
    
//     Film.destroy({
//         where:{title:title}
//     })
//    .then(film => {
//     if(!film){
//         res.send("That movie doesn't exist in our database. Did you type the name correctly?")
//     }else{
//         res.send("The movie was deleted successfuly");
//     }
//     }).catch((error) => {
//         res.send(error);
//     });  
// };











//Export
module.exports = FilmsController;