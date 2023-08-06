const express = require('express');
const adminController = require('../controller/adminController');

const adminRoute = express.Router();

//admin Home Page
adminRoute.get('/adminHome',adminController.adminHomePage);

//admin see all page
adminRoute.get('/adminSeeAllHistory',adminController.adminSeeAllPage);

//Admin Attendance create page
adminRoute.get('/adminAttendantCreate',adminController.adminCreateAttendancePage);

//Admin search Attendance page
adminRoute.get('/adminAttendantSearch',adminController.adminSearchAttendancePage);

//Admin Attendance Update page
adminRoute.get('/adminAttendantUpdate',adminController.adminUpdateAttendancePage);

module.exports = adminRoute;