
const express = require('express');
const router = express.Router();

const FilmsController = require('../controllers/FilmsController');



//Endpoint-function links
router.get('/', FilmsController.getFilms);
router.post('/addfilm', FilmsController.postFilm);
router.get('/search', FilmsController.searchFilm);///Find by movie name in body JSON
router.get('/:id', FilmsController.getById);///Find movie by Id
// router.get(`/delete`, FilmsController.delete);

//Export
module.exports = router;