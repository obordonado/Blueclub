
const express = require('express');
const router = express.Router();

const RentController = require('../controllers/RentController');


//Endpoint-function links
router.get('/', RentController.getAllRent);



//Export
module.exports = router;