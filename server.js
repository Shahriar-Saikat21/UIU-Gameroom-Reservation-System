//external imports
const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

//internal import
const path = require('path'); //path module
const connectDB = require('./config/db');  //database connection
const {notFoundHandler,errorHandler} = require('./middleware/errorHandle'); //error handle middleware
const homeRoute = require('./routes/homeRoute');
const attendanceRoute = require('./routes/attendanceRoute');
const studentRoute = require('./routes/studentRoute');
const adminRoute = require('./routes/adminRoute');
const {banJob,limitCheck,unBan} = require('./middleware/scheduleJob');


//initialization
const app = express();

//set view engine
app.set('view engine','ejs');

//set public folder
app.use(express.static(path.join(__dirname,'public')));

//external middleware
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));


//all routes
app.use(homeRoute);
app.use(attendanceRoute);
app.use(studentRoute);
app.use(adminRoute);

//Custom error handle
app.use(notFoundHandler);
app.use(errorHandler);

// run server
app.listen(process.env.PORT, async() =>{
    await connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
    banJob();
    unBan();
    limitCheck();   
});