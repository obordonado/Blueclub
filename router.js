//Imports
const router = require('express').Router();

const UserRouter = require('./views/UserRouter');
const FilmsRouter = require('./views/FilmsRouter');
const RentRouter = require('./views/RentRouter');

router.use('/users', UserRouter);
router.use('/films', FilmsRouter);
router.use('/rent', RentRouter);

//Export

module.exports = router;