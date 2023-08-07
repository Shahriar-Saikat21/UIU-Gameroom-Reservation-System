const bcrypt = require('bcrypt');
const employee = require('../models/attendanceModel.js');

const adminController = {};

//Admin Home Page
adminController.adminHomePage = (req, res) => {
    res.render('adminHomePage');
};

//Admin See All Page
adminController.adminSeeAllPage = (req, res) => {
    res.render('adminHomePage3');
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
adminController.adminUpdateAttendancePage = (req, res) => {
    res.render('adminAttendenceAccountUpdate');
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