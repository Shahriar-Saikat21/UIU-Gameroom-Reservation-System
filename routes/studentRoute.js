const express = require('express');
const studentController = require('../controller/studentController');

const studentRoute = express.Router();

//Student Home Page
studentRoute.get('/studentHome',studentController.studentHomePage);

//Student History Page
studentRoute.get('/studentHistoryPage',studentController.studentHistoryPage);

//Student TT Reservation Page
studentRoute.get('/studentTableTennis', studentController.TTReservationPage);


//Student Chess Reservation Page
studentRoute.get('/studentChess', studentController.ChessReservationPage);

//Student Carrom Reservation Page
studentRoute.get('/studentCarrom', studentController.CarromReservationPage);


module.exports = studentRoute;