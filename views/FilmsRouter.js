
const express = require('express');
const router = express.Router();

const FilmsController = require('../controllers/FilmsController');



//Endpoint-function links
router.get('/', FilmsController.getFilms);///Get JSON of every movie in database.
router.post('/addfilm', FilmsController.postFilm);///Add new movie to database.
router.get('/search', FilmsController.searchFilm);///Find by movie name in body JSON.
router.get('/:title', FilmsController.getByTitle);///Find movie by name in url.
router.get('/:id', FilmsController.getById);///Find movie by Id in url.
// router.get(`/delete`, FilmsController.delete);

//Export
module.exports = router;