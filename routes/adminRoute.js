const express = require('express');
const adminController = require('../controller/adminController');
const authentication = require('../middleware/authentication');

const adminRoute = express.Router();

//admin Home Page
adminRoute.get('/adminHome',authentication,adminController.adminHomePage);

//Admin Student search
adminRoute.post('/adminStudentSearch',authentication,adminController.adminStudentSearch);

//admin student schedule see
adminRoute.get('/adminSeeAllHistory',authentication,adminController.adminStudentSchedule);

//admin student ban
adminRoute.put('/adminStudentBan',authentication,adminController.adminStudentBan);

//admin student unban
adminRoute.put('/adminStudentUnban',authentication,adminController.adminStudentUnban);

//Admin Attendance create page
adminRoute.get('/adminAttendantCreate',authentication,adminController.adminCreateAttendancePage);

//Admin search Attendance page
adminRoute.get('/adminAttendantSearch',authentication,adminController.adminSearchAttendancePage);

//Admin Search Attendance func
adminRoute.post('/adminAttendantSearchFunc',authentication,adminController.adminSearchAttendance);

//Admin Attendance Update page
adminRoute.get('/adminAttendantUpdate',authentication,adminController.adminUpdateAttendancePage);

//Admin Attendance Update Func
adminRoute.put('/adminAttendantUpdateFunc',authentication,adminController.adminAttendanceUpdateFunc);

//Admin Attendance Create Func
adminRoute.post('/adminAttendantCreateFunc',authentication,adminController.adminCreateAttendance);

module.exports = adminRoute;