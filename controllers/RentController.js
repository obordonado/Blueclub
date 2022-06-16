
const { Rent } = require('../models/index');

//UserController object declaration
const RentController = {};

RentController.getAllRent = async (req, res) => {
   Rent.findAll() 
   .then(data=>{
    res.send(data)
   });
   

};

//Export
module.exports = RentController;