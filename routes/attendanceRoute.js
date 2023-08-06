const express = require('express');
const attendance = require('../controller/attendanceController');

const attendanceRoute = express.Router();

//Attendance Home Page
attendanceRoute.get('/attendance', attendance.homePage);

//Attendance Distribution Page
attendanceRoute.get('/attendanceDistribution', attendance.distributionPage);

module.exports = attendanceRoute;