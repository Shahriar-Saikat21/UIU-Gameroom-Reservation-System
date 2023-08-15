const Schedule = require('../models/scheduleModel');


const attendanceController = {};

//Attendance Home Page
attendanceController.homePage = (req, res) => {
    res.render('attendenceHomePage');
};

//Attendance Distribution Page
attendanceController.distributionPage = (req, res) => {
    res.render('attendenceDistributionPage');
};

//attendance distribution history
attendanceController.distributionHistoryPage = async(req, res) => {
    try{
        const schedule = await Schedule.find({$and:[{reservationDate : req.body.date},{game : req.body.game}]});
        console.log(schedule);
        res.json({success : true, history : schedule});
    }catch(err){
        res.json({success : false, message:"Error in finding schedule"});
    }
}

module.exports = attendanceController;