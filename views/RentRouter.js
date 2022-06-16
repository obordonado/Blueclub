
const express = require('express');
const router = express.Router();
const isAdmin= require("../middlewares/isAdmin");
const RentController = require('../controllers/RentController');


//Endpoint-function links
router.get('/rent', isAdmin, RentController.getAllRent);



//Export
module.exports = router;