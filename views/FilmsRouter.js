
const express = require('express');
const router = express.Router();

const FilmsController = require('../controllers/FilmsController');


//Endpoint-function links
router.get('/', FilmsController.getFilms);
router.post('/addfilm', FilmsController.postFilm);
// router.get('/search/:film', FilmsController.searchFilm);


//Export
module.exports = router;