const adminController = {};

//Admin Home Page
adminController.adminHomePage = (req, res) => {
    res.render('adminHomePage');
};

//Admin Create Attendance page
adminController.adminCreateAttendancePage = (req, res) => {
    res.render('AdminAttendenceAccountCreate');
};

//Admin Update Attendance page
adminController.adminUpdateAttendancePage = (req, res) => {
    res.render('adminAttendenceAccountUpdate');
};


module.exports = adminController;