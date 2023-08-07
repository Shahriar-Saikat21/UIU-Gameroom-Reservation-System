const bcrypt = require('bcrypt');
const employee = require('../models/attendanceModel.js');
const schedule = require('../models/scheduleModel.js');
const student = require('../models/studentModel.js');

const adminController = {};

//Admin Home Page
adminController.adminHomePage = (req, res) => {
    res.render('adminHomePage');
};

//admin student search
adminController.adminStudentSearch = async (req, res) => {
    const user = await student.findOne({studentID:req.body.id});
    if(user){
        res.json({success:true,info:user});
    }else{
        res.json({message: "No student record found",success:false});
    }
};

//admin student see schedule
adminController.adminStudentSchedule = async (req, res) => {
    const time = await schedule.find({studentID:req.query.id});
    res.render('adminSeeAllHistory',{time});
}; 

//admin student ban
adminController.adminStudentBan = async (req, res) => {
    const memID = req.query.id;
    try {
        await student.updateOne({studentID:memID},{$set:{status:"Banned"}});
        res.status(500).json({message: "Student Banned Successfully",success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }
};

//admin student Unban
adminController.adminStudentUnban = async (req, res) => {
    const memID = req.query.id;
    try {
        await student.updateOne({studentID:memID},{$set:{status:"active"}});
        res.status(500).json({message: "Student Unbanned Successfully",success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }
};

//Admin Create Attendance page
adminController.adminCreateAttendancePage = (req, res) => {
    res.render('AdminAttendenceAccountCreate');
};

//Admin search Attendance page
adminController.adminSearchAttendancePage = (req, res) => {
    res.render('adminAttendenceAccountSearch');
};

//Admin search Attendance func
adminController.adminSearchAttendance = async (req, res) => {
    const user = await employee.findOne({ employeeID: req.body.id });
    if(user){
        res.json({success:true,info:user});
    }else{
        res.json({message: "No employee found",success:false});
    }
};


//Admin Update Attendance page
adminController.adminUpdateAttendancePage = async (req, res) => {
    const user = await employee.findOne({ employeeID: req.query.id });
    if(user){
        res.render('adminAttendenceAccountUpdate',{user});
    }else{
        res.render('adminAttendenceAccountSearch');
    }
    
};

//Admin Update Attendance func
adminController.adminAttendanceUpdateFunc = async (req, res) => {
    const memID = req.query.id;
    try {
        await employee.updateOne({employeeID:memID},{$set:{name:req.body.name,email:req.body.email,mobile:req.body.mobile}});
        res.status(500).json({message: "Employee Info Updated Successfully",success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }
};

//Admin Create Attendance func
adminController.adminCreateAttendance = async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new employee({
        name: req.body.name,
        email: req.body.email,
        employeeID: req.body.id,
        mobile: req.body.mobile,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.status(500).json({message: "Profile Created Successfully", success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }
};


module.exports = adminController;