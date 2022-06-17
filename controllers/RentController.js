
const { Rent } = require('../models/index');

//UserController object declaration
const RentController = {};
const bcryptjs = require(`jsonwebtoken`);
let authConfig = require(`../config/auth`);

RentController.getAllRent = async (req, res) => {
   Rent.findAll() 
   .then(data=>{
    res.send(data)
   });
   

};

RentController.postAllRent = async (req, res) => {

   let filmId = req.body.filmId;
   let userId = req.body.userId;
   let rent_date = req.body.rent_date;
   let return_date = req.body.return_date;
   let total_price = req.body.total_price;
   let createdAt = req.body.createdAt;
   let updatedAt = req.body.updatedAt;
   
   if(
    filmId===""||null
    ||userId===""||null
    ||rent_date===""||null 
    ||return_date===""||null 
    ||total_price===""||null
    ||createdAt===""||null 
    ||updatedAt===""||null
    )
{
    return res.send("Please introduce all data correctly");
};


   Rent.create({
       filmId: filmId,
       userId: userId,
       rent_date: rent_date,
       return_date: return_date,        
       total_price: total_price,
       createdAt: createdAt,
       updatedAt: updatedAt,
   }).then(film => {
       res.send(`Rent Generated succesfully!`);

   }).catch((error) => {
       res.send(error);
   });    
   
};

//Export
module.exports = RentController;