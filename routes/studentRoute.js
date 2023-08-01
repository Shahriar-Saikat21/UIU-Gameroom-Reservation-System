const express = require('express');
const studentController = require('../controller/studentController');

const studentRoute = express.Router();

//Student Home Page
studentRoute.get('/studentHome',studentController.studentHomePage);

//Student TT Reservation Page
studentRoute.get('/studentTableTennis', studentController.TTReservationPage);

module.exports = studentRoute;