
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin= require("../middlewares/isAdmin");
const RentController = require('../controllers/RentController');


//Endpoint-function links
router.get('/rent', isAdmin, RentController.getAllRent);
router.post(`/rent`,auth,RentController.postAllRent);




//Export
module.exports = router;