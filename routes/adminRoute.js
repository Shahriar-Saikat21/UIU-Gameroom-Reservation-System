const express = require('express');
const adminController = require('../controller/adminController');
const authentication = require('../middleware/authentication');

const adminRoute = express.Router();

//admin Home Page
adminRoute.get('/adminHome',authentication,adminController.adminHomePage);

//admin see all page
adminRoute.get('/adminSeeAllHistory',authentication,adminController.adminSeeAllPage);

//Admin Attendance create page
adminRoute.get('/adminAttendantCreate',authentication,adminController.adminCreateAttendancePage);

//Admin search Attendance page
adminRoute.get('/adminAttendantSearch',authentication,adminController.adminSearchAttendancePage);

//Admin Search Attendance func
adminRoute.post('/adminAttendantSearchFunc',authentication,adminController.adminSearchAttendance);

//Admin Attendance Update page
adminRoute.get('/adminAttendantUpdate',authentication,adminController.adminUpdateAttendancePage);

//Admin Attendance Create Func
adminRoute.post('/adminAttendantCreateFunc',authentication,adminController.adminCreateAttendance);

module.exports = adminRoute;