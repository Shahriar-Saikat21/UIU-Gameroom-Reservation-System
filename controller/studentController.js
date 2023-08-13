const Student = require('../models/studentModel');
const Schedule = require('../models/scheduleModel');

const studentController = {};

studentController.studentHomePage = async(req,res)=>{
    const user = await Student.findOne({studentID:req.id});
    const time = await Schedule.find({$and:[{studentID : req.id},{reservationStatus :
        "Not Attended"}]}).sort({reservationDate:-1});

    res.render('studentHomePage',{user,time});
    
};

studentController.studentHistoryPage = (req,res)=>{
    res.render('studentHistoryPage');
};


//Student TT Reservation Page
studentController.TTReservationPage = (req, res) => {
    res.render('studentTTReservationPage');
}

//Student Chess Reservation Page
studentController.ChessReservationPage = (req, res) => {
    res.render('studentChessReservationPage');
}

//Student Carrom Reservation Page
studentController.CarromReservationPage = (req, res) => {
    res.render('studentCarromReservationPage');
}

module.exports = studentController;