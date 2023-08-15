const express = require('express');
const attendance = require('../controller/attendanceController');
const authentication = require('../middleware/authentication');

const attendanceRoute = express.Router();

//Attendance Home Page
attendanceRoute.get('/attendance', authentication,attendance.homePage);

//Attendace Search
attendanceRoute.post('/attendanceSearch', authentication,attendance.searchPage);

//Attendance status update
attendanceRoute.put('/attendanceStatusUpdate', authentication,attendance.statusUpdate);

//Attendance Distribution Page
attendanceRoute.get('/attendanceDistribution', authentication,attendance.distributionPage);

//Attendance distribution history
attendanceRoute.post('/attendanceDistributionHistory', authentication,attendance.distributionHistoryPage);

module.exports = attendanceRoute;