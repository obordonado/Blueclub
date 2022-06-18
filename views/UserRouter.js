
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const UserController = require('../controllers/UserController');

//Endpoint-function links
router.get('/', isAdmin, UserController.getUser);
router.put(`/update`, UserController.putUser);
router.post('/adduser', UserController.postUser);
router.post('/login', UserController.loginUser);

//Export
module.exports = router;