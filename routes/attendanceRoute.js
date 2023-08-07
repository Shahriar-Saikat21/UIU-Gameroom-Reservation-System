const express = require('express');
const attendance = require('../controller/attendanceController');
const authentication = require('../middleware/authentication');

const attendanceRoute = express.Router();

//Attendance Home Page
attendanceRoute.get('/attendance', authentication,attendance.homePage);

//Attendance Distribution Page
attendanceRoute.get('/attendanceDistribution', authentication,attendance.distributionPage);

module.exports = attendanceRoute;