const express = require('express');
const attendance = require('../controller/attendanceController');

const attendanceRoute = express.Router();

attendanceRoute.get('/attendance', attendance.homePage);

module.exports = attendanceRoute;