const Student = require('../models/studentModel');
const Schedule = require('../models/scheduleModel');
const bcrypt = require('bcrypt');

const studentController = {};

studentController.studentHomePage = async(req,res)=>{
    const user = await Student.findOne({studentID:req.id});
    const time = await Schedule.find({$and:[{studentID : req.id},{reservationStatus :
        "Not Attended"}]}).sort({reservationDate:1});

    res.render('studentHomePage',{user,time});
    
};

studentController.studentHistoryPage = async (req,res)=>{
    const time = await Schedule.find({$and:[{studentID : req.id}]}).sort({reservationDate:1});
    const d = new Date();
    let month = d.getMonth()+1;

    let thisMonth = 0;
    let total = time.length;

    for(i = 0; i<total; i++){
        let f = new Date(time[i].reservationDate);
        if(f.getMonth()+1 == month){
            thisMonth++;
        }
    }

    const count = {
        "thisMonth" : thisMonth,
        "total" : total
    }
    res.render('studentHistoryPage',{time,count});
};


//Student TT Reservation Page
studentController.TTReservationPage =  async (req, res) => {
    const user = await Student.findOne({studentID : req.id});
    const status = user.status;
    if(status == "active"){
        res.render('studentTTReservationPage');
    }else{
        const time = await Schedule.find({$and:[{studentID : req.id},{reservationStatus :
            "Not Attended"}]}).sort({reservationDate:1});
        res.render('studentHomePage',{user,time});
    }
}

//Student TT search Page
studentController.TTSearchPage = async (req, res) => {
    const date = req.body.date;
    const board = req.body.board;

    const schedule = await Schedule.find({$and:[{reservationDate : date},{board : board},{game : "Table Tennis"}]});

    const scheduleStatus = {
        "1" : "",  
        "2" : "",  
        "3" : "",  
        "4" : "",  
        "5" : "",  
        "6" : "",  
        "7" : "",  
        "8" : "",  
        "9" : "",  
        "10" : "",  
        "11" : "",  
        "12" : "",  
        "13" : "",  
        "14" : "",  
        "15" : "",  
        "16" : "",  
    };

    for (let i of schedule){
        if(i.reservationTime=='09:00 AM - 09:30 AM'){
            scheduleStatus[1] = 'disabled'
        }else if(i.reservationTime=='09:30 AM - 10:00 AM'){
            scheduleStatus[2] = 'disabled'
        }else if(i.reservationTime=='10:00 AM - 10:30 AM'){
            scheduleStatus[3] = 'disabled'
        }else if(i.reservationTime=='10:30 AM - 11:00 AM'){
            scheduleStatus[4] = 'disabled'
        }else if(i.reservationTime=='11:00 AM - 11:30 AM'){
            scheduleStatus[5] = 'disabled'
        }else if(i.reservationTime=='11:30 AM - 12:00 PM'){
            scheduleStatus[6] = 'disabled'
        }else if(i.reservationTime=='12:00 PM - 12:30 PM'){
            scheduleStatus[7] = 'disabled'
        }else if(i.reservationTime=='12:30 PM - 01:00 PM'){
            scheduleStatus[8] = 'disabled'
        }else if(i.reservationTime=='01:00 PM - 01:30 PM'){
            scheduleStatus[9] = 'disabled'
        }else if(i.reservationTime=='01:30 PM - 02:00 PM'){
            scheduleStatus[10] = 'disabled'
        }else if(i.reservationTime=='02:00 PM - 02:30 PM'){
            scheduleStatus[11] = 'disabled'
        }else if(i.reservationTime=='02:30 PM - 03:00 PM'){
            scheduleStatus[12] = 'disabled'
        }else if(i.reservationTime=='03:00 PM - 03:30 PM'){
            scheduleStatus[13] = 'disabled'
        }else if(i.reservationTime=='03:30 PM - 04:00 PM'){
            scheduleStatus[14] = 'disabled'
        }else if(i.reservationTime=='04:00 PM - 04:30 PM'){
            scheduleStatus[15] = 'disabled'
        }else if(i.reservationTime=='04:30 PM - 05:00 PM'){
            scheduleStatus[16] = 'disabled'
        }
    }
    res.json({scheduleStatus});
}

//Student TT book
studentController.TTBook = async (req, res) => {
    const student = await Student.findOne({studentID:req.id});
    const limit = student.limit;

    if(limit >=2){
        res.status(500).json({message: "Your weekly limit is over", success:true});
    }else{
        const newSchedule = new Schedule({
            studentID: req.id,
            game : "Table Tennis",
            reservationDate : req.body.dateSearch,
            reservationTime : req.body.reservedTime,
            board : req.body.board,
        });

        try {
            await newSchedule.save();
            await Student.updateOne({studentID:req.id},{$set : {limit : limit+1}});
            res.status(500).json({message: "Schedule has been reserved !!!", success:true});
        } catch (err) {
            res.status(200).json({message: err.message,success:false});
        }
    }

}

//Student Chess Reservation Page
studentController.ChessReservationPage = async(req, res) => {
    const user = await Student.findOne({studentID : req.id});
    const status = user.status;
    if(status == "active"){
        res.render('studentChessReservationPage');
    }else{
        const time = await Schedule.find({$and:[{studentID : req.id},{reservationStatus :
            "Not Attended"}]}).sort({reservationDate:1});
        res.render('studentHomePage',{user,time});
    }
}

//Student chess search Page
studentController.chessSearchPage = async (req, res) => {
    const date = req.body.date;
    const board = req.body.board;

    const schedule = await Schedule.find({$and:[{reservationDate : date},{board : board},{game : "Chess"}]});

    const scheduleStatus = {
        "1" : "",  
        "2" : "",  
        "3" : "",  
        "4" : "",  
        "5" : "",  
        "6" : "",  
        "7" : "",  
        "8" : "",  
        "9" : "",  
        "10" : "",  
        "11" : "",  
        "12" : "",  
        "13" : "",  
        "14" : "",  
        "15" : "",  
        "16" : "",  
    };

    for (let i of schedule){
        if(i.reservationTime=='09:00 AM - 09:30 AM'){
            scheduleStatus[1] = 'disabled'
        }else if(i.reservationTime=='09:30 AM - 10:00 AM'){
            scheduleStatus[2] = 'disabled'
        }else if(i.reservationTime=='10:00 AM - 10:30 AM'){
            scheduleStatus[3] = 'disabled'
        }else if(i.reservationTime=='10:30 AM - 11:00 AM'){
            scheduleStatus[4] = 'disabled'
        }else if(i.reservationTime=='11:00 AM - 11:30 AM'){
            scheduleStatus[5] = 'disabled'
        }else if(i.reservationTime=='11:30 AM - 12:00 PM'){
            scheduleStatus[6] = 'disabled'
        }else if(i.reservationTime=='12:00 PM - 12:30 PM'){
            scheduleStatus[7] = 'disabled'
        }else if(i.reservationTime=='12:30 PM - 01:00 PM'){
            scheduleStatus[8] = 'disabled'
        }else if(i.reservationTime=='01:00 PM - 01:30 PM'){
            scheduleStatus[9] = 'disabled'
        }else if(i.reservationTime=='01:30 PM - 02:00 PM'){
            scheduleStatus[10] = 'disabled'
        }else if(i.reservationTime=='02:00 PM - 02:30 PM'){
            scheduleStatus[11] = 'disabled'
        }else if(i.reservationTime=='02:30 PM - 03:00 PM'){
            scheduleStatus[12] = 'disabled'
        }else if(i.reservationTime=='03:00 PM - 03:30 PM'){
            scheduleStatus[13] = 'disabled'
        }else if(i.reservationTime=='03:30 PM - 04:00 PM'){
            scheduleStatus[14] = 'disabled'
        }else if(i.reservationTime=='04:00 PM - 04:30 PM'){
            scheduleStatus[15] = 'disabled'
        }else if(i.reservationTime=='04:30 PM - 05:00 PM'){
            scheduleStatus[16] = 'disabled'
        }
    }
    res.json({scheduleStatus});
}

//Student chess book
studentController.chessBook = async (req, res) => {
    const student = await Student.findOne({studentID:req.id});
    const limit = student.limit;

    if(limit >=2){
        res.status(500).json({message: "Your weekly limit is over", success:true});
    }else{
        const newSchedule = new Schedule({
            studentID: req.id,
            game : "Chess",
            reservationDate : req.body.dateSearch,
            reservationTime : req.body.reservedTime,
            board : req.body.board,
        });

        try {
            await newSchedule.save();
            await Student.updateOne({studentID:req.id},{$set : {limit : limit+1}});
            res.status(500).json({message: "Schedule has been reserved !!!", success:true});
        } catch (err) {
            res.status(200).json({message: err.message,success:false});
        }
    }

}

//Student Carrom Reservation Page
studentController.CarromReservationPage = async(req, res) => {
    const user = await Student.findOne({studentID : req.id});
    const status = user.status;
    if(status == "active"){
        res.render('studentCarromReservationPage');
    }else{
        const time = await Schedule.find({$and:[{studentID : req.id},{reservationStatus :
            "Not Attended"}]}).sort({reservationDate:1});
        res.render('studentHomePage',{user,time});
    }
}

//Student Carrom search Page
studentController.carromSearchPage = async (req, res) => {
    const date = req.body.date;
    const board = req.body.board;

    const schedule = await Schedule.find({$and:[{reservationDate : date},{board : board},{game : "Carrom"}]});

    const scheduleStatus = {
        "1" : "",  
        "2" : "",  
        "3" : "",  
        "4" : "",  
        "5" : "",  
        "6" : "",  
        "7" : "",  
        "8" : "",  
        "9" : "",  
        "10" : "",  
        "11" : "",  
        "12" : "",  
        "13" : "",  
        "14" : "",  
        "15" : "",  
        "16" : "",  
    };

    for (let i of schedule){
        if(i.reservationTime=='09:00 AM - 09:30 AM'){
            scheduleStatus[1] = 'disabled'
        }else if(i.reservationTime=='09:30 AM - 10:00 AM'){
            scheduleStatus[2] = 'disabled'
        }else if(i.reservationTime=='10:00 AM - 10:30 AM'){
            scheduleStatus[3] = 'disabled'
        }else if(i.reservationTime=='10:30 AM - 11:00 AM'){
            scheduleStatus[4] = 'disabled'
        }else if(i.reservationTime=='11:00 AM - 11:30 AM'){
            scheduleStatus[5] = 'disabled'
        }else if(i.reservationTime=='11:30 AM - 12:00 PM'){
            scheduleStatus[6] = 'disabled'
        }else if(i.reservationTime=='12:00 PM - 12:30 PM'){
            scheduleStatus[7] = 'disabled'
        }else if(i.reservationTime=='12:30 PM - 01:00 PM'){
            scheduleStatus[8] = 'disabled'
        }else if(i.reservationTime=='01:00 PM - 01:30 PM'){
            scheduleStatus[9] = 'disabled'
        }else if(i.reservationTime=='01:30 PM - 02:00 PM'){
            scheduleStatus[10] = 'disabled'
        }else if(i.reservationTime=='02:00 PM - 02:30 PM'){
            scheduleStatus[11] = 'disabled'
        }else if(i.reservationTime=='02:30 PM - 03:00 PM'){
            scheduleStatus[12] = 'disabled'
        }else if(i.reservationTime=='03:00 PM - 03:30 PM'){
            scheduleStatus[13] = 'disabled'
        }else if(i.reservationTime=='03:30 PM - 04:00 PM'){
            scheduleStatus[14] = 'disabled'
        }else if(i.reservationTime=='04:00 PM - 04:30 PM'){
            scheduleStatus[15] = 'disabled'
        }else if(i.reservationTime=='04:30 PM - 05:00 PM'){
            scheduleStatus[16] = 'disabled'
        }
    }
    res.json({scheduleStatus});
}

//Student Carrom book
studentController.carromBook = async (req, res) => {
    const student = await Student.findOne({studentID:req.id});
    const limit = student.limit;

    if(limit ===2 || limit >2){
        res.status(500).json({message: "Your weekly limit is over", success:true});
    }else{
        const newSchedule = new Schedule({
            studentID: req.id,
            game : "Carrom",
            reservationDate : req.body.dateSearch,
            reservationTime : req.body.reservedTime,
            board : req.body.board,
        });
    
        try {
            await newSchedule.save();
            await Student.updateOne({studentID:req.id},{$set : {limit : limit+1}});
            res.status(500).json({message: "Schedule has been reserved !!!", success:true});
        } catch (err) {
            res.status(200).json({message: err.message,success:false});
        }
    }

}

//Student cancel reservation
studentController.cancelReservation = async (req, res) => {
    try {
        await Schedule.deleteOne({_id:req.query.id});
        res.status(500).json({message: "Reservation has been cancelled Successfully",success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }
}

//student change password
studentController.changeStudentPassword = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.passwordValue, 10);
        await Student.updateOne({studentID:req.id},{$set:{password:hashedPassword}});
        res.status(500).json({message: "Password has been updated successfully",success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }
}

//student change profile pic
studentController.changeStudentPP = async (req, res) => {
    try {
        await Student.updateOne({studentID:req.id},{$set:{image:{
            data : req.file.buffer,
            contentType : req.file.mimetype
        }}});
        res.redirect('/studentHome');
    } catch (err) {
        res.json({message: err.message,success:false})
    }
}

//student show profile pic
studentController.showStudentPP = async (req, res) => {
    try {
        const user = await Student.findOne({studentID:req.id});
        res.json({memory:user,success:true});
    } catch (err) {
        res.json({message: err.message,success:false})
    }
}

module.exports = studentController;