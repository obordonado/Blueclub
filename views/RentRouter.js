//needed
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin= require("../middlewares/isAdmin");
const RentController = require('../controllers/RentController');


//Endpoint-function links
router.get('/rent', isAdmin, RentController.getAllRent);//Getting the JSON object of all "sales" in rent.
router.post(`/rent`,auth,RentController.postAllRent);// Adding a new "sale" in rent.


//Exporting
module.exports = router;