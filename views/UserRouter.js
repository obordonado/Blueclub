//Importing needed
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const UserController = require('../controllers/UserController');

//Endpoint-function links
router.get('/', isAdmin, UserController.getUser);//Admin user gets to see the whole JSON.
router.put(`/update`, UserController.putUser);//any user can update its own info.
router.post('/adduser', UserController.postUser);//any user can create an account.
router.post('/login', UserController.loginUser);//any user with an account can log in.

//Exporting
module.exports = router;