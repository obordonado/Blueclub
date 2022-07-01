
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

///Adding a new movie to database
FilmsController.postFilm = async (req, res) => {

    let title = req.body.title;
    let year = req.body.year;
    let genre = req.body.genre;
    let director = req.body.director;
    let duration = req.body.duration;
    let recomended_age = req.body.recomended_age;
    let price = req.body.price;
    
    ///catch blank or null spaces when introducing attributes
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
    
    ///If data is correct, create new movie.
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

//Get movie through body
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

//Get movie by Id in url
FilmsController.getById = (req, res) => {
  Film.findAll({ where: { id: req.params.id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error 500.",
      });
    });
};



//GET movie by Title in url
FilmsController.getByTitle = (req, res) => {
  Film.findAll({ where: { title: req.params.title } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error 500."
      });
    });
};


///Delete movie by movie id !! Need isAdmin && pass data through body.
FilmsController.delete = async (req, res) => {

    let id  = req.params.id;
    
    Film.destroy({
        where:{id:id}
    })
   .then(film => {
    if(film ==1){
        res.send(`The movie with id ${id} was deleted successfully.`);
    }else{
        res.send(`That didn't work. Did you type the correct id?`);
    }
    }).catch((error) => {
        res.send(error);
    });  
};


/// Delete --------ALL------- movies!!.Need isAdmin && pass data through body.
  FilmsController.deleteSeveral = (req, res) => {

    Film.findAll()
    .then(data => {return (data)});

    Film.destroy({where: {id: [22,23,24,]},truncate:false})

    .then(nums => {
        res.send({ message: `${nums} Movies were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Could not delete. Did you check the id's?"
        });
      });
  };


//Export
module.exports = FilmsController;
