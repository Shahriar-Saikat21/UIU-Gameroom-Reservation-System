const attendanceController = {};

//Attendance Home Page
attendanceController.homePage = (req, res) => {
    res.render('attendenceHomePage');
};

//Attendance Distribution Page
attendanceController.distributionPage = (req, res) => {
    res.render('attendenceDistributionPage');
};

module.exports = attendanceController;