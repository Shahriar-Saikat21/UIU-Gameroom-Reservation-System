const express = require('express');
const homeController = require('../controller/homeController');

const homeRoute = express.Router();


//Home page & login page
homeRoute.get('/', homeController.homePage);

//login 
homeRoute.post('/login', homeController.loginUser);

//logout
homeRoute.get('/logout', homeController.logoutUser);

module.exports = homeRoute;