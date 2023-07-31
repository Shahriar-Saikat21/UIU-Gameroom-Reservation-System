const express = require('express');
const studentController = require('../controller/studentController');

const studentRoute = express.Router();


//Student TT Reservation Page
studentRoute.get('/studentTableTennis', studentController.TTReservationPage);

module.exports = studentRoute;