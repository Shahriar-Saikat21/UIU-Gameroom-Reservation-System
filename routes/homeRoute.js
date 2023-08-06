const express = require('express');
const homeController = require('../controller/homeController');

const homeRoute = express.Router();


//Home page & login page
homeRoute.get('/', homeController.homePage);

//signup page
homeRoute.get('/signup', homeController.signupPage);

//forget password page
homeRoute.get('/forgetPassword', homeController.forgetPassword);

//reset password page
homeRoute.get('/resetPassword', homeController.resetPasswordPage);

//signin request
homeRoute.post('/signinRequest', homeController.signinRequest);


//signin validation with otp and signin
homeRoute.post('/signinValidation', homeController.signinValidation);

//login 
homeRoute.post('/login', homeController.loginUser);

//logout
homeRoute.get('/logout', homeController.logoutUser);

module.exports = homeRoute;