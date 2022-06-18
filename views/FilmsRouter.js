///Importing necessary
const express = require('express');
const router = express.Router();
const FilmsController = require('../controllers/FilmsController');
const auth = require("../middlewares/auth");
const isAdmin= require("../middlewares/isAdmin");


//Endpoint-function links
router.get('/', FilmsController.getFilms);///Get JSON of every movie in database.
router.post('/addfilm',isAdmin, FilmsController.postFilm);///Add new movie to database.
router.get('/search', FilmsController.searchFilm);///Find by movie name in body JSON.
router.get('/:title', FilmsController.getByTitle);///Find movie by name in url.
router.get('/:id', FilmsController.getById);///Find movie by Id in url.

///-----Deleting movies------
router.delete(`/:id`, isAdmin, FilmsController.delete);///Delete movie by id.
//////////////////////////////////////////////////////////
router.delete(`/`, isAdmin, FilmsController.deleteSeveral);
///Delete several Ids at once through FilmsController.js->FilmsController.deleteSeveral->Film.destroy.
///If you want to DELETE ALL MOVIES, you only need to remove "id: [38,39,40,41,42]"


//Exporting
module.exports = router;