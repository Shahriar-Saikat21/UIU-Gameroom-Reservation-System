//external imports
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//model imports
const Student = require('../models/studentModel'); //student model


const homeController = {}

//Home Page & Login Page
homeController.homePage = (req, res) => {
    res.render('homePage');  
};

//login user
homeController.loginUser = async (req, res) => {
    
};

//logout user
homeController.logoutUser = (req, res) => {
    res.clearCookie(process.env.COOKIE_NAME);
    res.status(500).json({success:true});
};

module.exports = homeController;