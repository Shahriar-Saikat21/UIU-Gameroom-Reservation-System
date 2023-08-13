//external imports
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

//model imports
const student = require('../models/studentModel'); //student model
const uiuInfo = require('../models/uiuInfoModel'); //uiu info model
const admin = require('../models/adminModel'); //admin model
const attendance = require('../models/attendanceModel'); //attendance model

const homeController = {}

//Home Page & Login Page
homeController.homePage = (req, res) => {
    res.render('homePage');  
};

//signup page
homeController.signupPage = (req, res) => {
    res.render('signUPpage');
};

//forget password page
homeController.forgetPassword = (req, res) => {
    res.render('forgetPasswordpage');
};

//Reset Password Page
homeController.resetPasswordPage = (req, res) => {
    res.render('resetPassword');
};

//signin request
homeController.signinRequest = async (req, res) => {
    const user = await uiuInfo.findOne({ id: req.body.id });
    if(user){
        const otpSent = Math.floor(100000 + Math.random() * 900000);

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'isabella.keebler@ethereal.email',
                pass: 'uvfbtDNJXpTEv9NKz3'
            }
        });

        const mailData = {
            from: 'ephraim.west26@ethereal.email',
            to: `${user.email}`,         
            subject: 'UIU Reservation System - OTP Verification',
            text: `${otpSent}`
        };
    
        transporter.sendMail(mailData, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.status(200).send({ message:"OTP has been sent to your UIU mail",success:true,otp:otpSent,user:user });
        });
    }
};

//signin validation with otp and signin
homeController.signinValidation = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new student({
        studentID: req.body.id,
        password: hashedPassword,
        status : "active",
        name:req.body.name,
        email:req.body.email,
        uiuInfo : req.body.uid
    });

    try {
        await newUser.save();
        res.status(500).json({message: "Signup Successfully", success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }
};

//login user
homeController.loginUser = async (req, res) => {
    try {
        const id = req.body.id;
        let userID = '';
        let user = "";
        let role = '';
        if(id[0]=='0'){
            user = await student.findOne({ studentID: id });
            userID = user.studentID;
            role = 'student';
        }else if(id[0]=='A'){
            user = await admin.findOne({ id: id });
            userID = user.id;
            role = 'admin';
        }else if(id[0]=='E'){
            user = await attendance.findOne({ employeeID: id });
            userID = user.id;
            role = 'attendance';
        }
        if (user && user._id) {
            const isValidPass = await bcrypt.compare(req.body.password, user.password);

            if (isValidPass) {
                const userObject = {
                    id: userID,
                }

                //token generate
                const token = jwt.sign(userObject, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                //cookie set
                res.cookie(process.env.COOKIE_NAME, token, {
                    maxAge: process.env.JWT_EXPIRES_IN,
                    httpOnly: true,
                    signed: true,
                });

                res.status(500).json({message: "User Logged In Successfully",success:true,role:role});
            }else{
                res.status(200).json({message: "Invalid email or password",success:false});
            }
        }else{
            res.status(200).json({message: "Invalid email or password",success:false});
        }
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }
};

//logout user
homeController.logoutUser = (req, res) => {
    res.clearCookie(process.env.COOKIE_NAME);
    res.status(500).json({success:true});
};

module.exports = homeController;