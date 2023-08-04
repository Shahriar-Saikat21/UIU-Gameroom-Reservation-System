const express = require('express');
const adminController = require('../controller/adminController');

const adminRoute = express.Router();

//admin Home Page
adminRoute.get('/adminHome',adminController.adminHomePage);

//Admin Attendance create page
adminRoute.get('/adminAttendantCreate',adminController.adminCreateAttendancePage);

//Admin Attendance Update page
adminRoute.get('/adminAttendantUpdate',adminController.adminUpdateAttendancePage);

module.exports = adminRoute;