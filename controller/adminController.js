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

//Admin Update Attendance page
adminController.adminUpdateAttendancePage = (req, res) => {
    res.render('adminAttendenceAccountUpdate');
};


module.exports = adminController;