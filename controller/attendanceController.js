const Schedule = require('../models/scheduleModel');


const attendanceController = {};

//Attendance Home Page
attendanceController.homePage = (req, res) => {
    res.render('attendenceHomePage');
};

//attendance history
attendanceController.searchPage = async(req, res) => {
    try{
        const schedule = await Schedule.findOne({_id : req.body.token});
        res.json({success : true, history : schedule});
    }catch(err){
        console.log(err);
    }
}

//attendance update status
attendanceController.statusUpdate = async(req, res) => {
    try {
        await Schedule.updateOne({_id:req.body.updateToken},{$set:{reservationStatus:req.body.status}});
        res.status(500).json({message: "Status has been updated successfully",success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }
}

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