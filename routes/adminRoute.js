const express = require('express');
const adminController = require('../controller/adminController');

const adminRoute = express.Router();

//admin Home Page
adminRoute.get('/adminHome',adminController.adminHomePage);

module.exports = adminRoute;