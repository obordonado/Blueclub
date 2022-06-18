//Imports
const router = require('express').Router();
const UserRouter = require('./views/UserRouter');
const FilmsRouter = require('./views/FilmsRouter');
const RentRouter = require('./views/RentRouter');


///Paths we are going to use in POSTMAN
router.use('/users', UserRouter);
router.use('/films', FilmsRouter);
router.use('/rent', RentRouter);

//Export
module.exports = router;