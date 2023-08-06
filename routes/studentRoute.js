const express = require('express');
const studentController = require('../controller/studentController');
const authentication = require('../middleware/authentication');

const studentRoute = express.Router();

//Student Home Page
studentRoute.get('/studentHome',authentication,studentController.studentHomePage);

//Student History Page
studentRoute.get('/studentHistoryPage',authentication,studentController.studentHistoryPage);

//Student TT Reservation Page
studentRoute.get('/studentTableTennis', authentication,studentController.TTReservationPage);


//Student Chess Reservation Page
studentRoute.get('/studentChess', authentication,studentController.ChessReservationPage);

//Student Carrom Reservation Page
studentRoute.get('/studentCarrom', authentication,studentController.CarromReservationPage);


module.exports = studentRoute;