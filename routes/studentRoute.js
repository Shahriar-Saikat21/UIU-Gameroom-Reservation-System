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

//Student TT Search Page
studentRoute.post('/ttSearch', authentication,studentController.TTSearchPage);

//Student TT Book
studentRoute.post('/ttBook', authentication,studentController.TTBook);


//Student Chess Reservation Page
studentRoute.get('/studentChess', authentication,studentController.ChessReservationPage);

//Student chess Search Page
studentRoute.post('/chessSearch', authentication,studentController.chessSearchPage);

//Student chess Book
studentRoute.post('/chessBook', authentication,studentController.chessBook);

//Student Carrom Reservation Page
studentRoute.get('/studentCarrom', authentication,studentController.CarromReservationPage);

//Student carrom Search Page
studentRoute.post('/carromSearch', authentication,studentController.carromSearchPage);

//Student carrom Book
studentRoute.post('/carromBook', authentication,studentController.carromBook);

//student cancel reservation
studentRoute.get('/cancelReservation', authentication,studentController.cancelReservation);


module.exports = studentRoute;