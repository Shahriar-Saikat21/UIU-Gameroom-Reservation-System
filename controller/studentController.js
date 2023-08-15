const Student = require('../models/studentModel');
const Schedule = require('../models/scheduleModel');

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
    console.log(time,count)
    res.render('studentHistoryPage',{time,count});
};


//Student TT Reservation Page
studentController.TTReservationPage = (req, res) => {
    res.render('studentTTReservationPage');
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
        if(i.reservationTime=='09:00AM - 09:30AM'){
            scheduleStatus[1] = 'disabled'
        }else if(i.reservationTime=='09:30AM - 10:00AM'){
            scheduleStatus[2] = 'disabled'
        }else if(i.reservationTime=='10:00AM - 10:30AM'){
            scheduleStatus[3] = 'disabled'
        }else if(i.reservationTime=='10:30AM - 11:00AM'){
            scheduleStatus[4] = 'disabled'
        }else if(i.reservationTime=='11:00AM - 11:30AM'){
            scheduleStatus[5] = 'disabled'
        }else if(i.reservationTime=='11:30AM - 12:00PM'){
            scheduleStatus[6] = 'disabled'
        }else if(i.reservationTime=='12:00PM - 12:30PM'){
            scheduleStatus[7] = 'disabled'
        }else if(i.reservationTime=='12:30PM - 01:00PM'){
            scheduleStatus[8] = 'disabled'
        }else if(i.reservationTime=='01:00PM - 01:30PM'){
            scheduleStatus[9] = 'disabled'
        }else if(i.reservationTime=='01:30PM - 02:00PM'){
            scheduleStatus[10] = 'disabled'
        }else if(i.reservationTime=='02:00PM - 02:30PM'){
            scheduleStatus[11] = 'disabled'
        }else if(i.reservationTime=='02:30PM - 03:00PM'){
            scheduleStatus[12] = 'disabled'
        }else if(i.reservationTime=='03:00PM - 03:30PM'){
            scheduleStatus[13] = 'disabled'
        }else if(i.reservationTime=='03:30PM - 04:00PM'){
            scheduleStatus[14] = 'disabled'
        }else if(i.reservationTime=='04:00PM - 04:30PM'){
            scheduleStatus[15] = 'disabled'
        }else if(i.reservationTime=='04:30PM - 05:00PM'){
            scheduleStatus[16] = 'disabled'
        }
    }
    res.json({scheduleStatus});
}

//Student TT book
studentController.TTBook = async (req, res) => {
    //const reservationStatus = "Not Attended";

    const newSchedule = new Schedule({
        studentID: req.id,
        game : "Table Tennis",
        reservationDate : req.body.dateSearch,
        reservationTime : req.body.reservedTime,
        board : req.body.board,
    });

    try {
        await newSchedule.save();
        res.status(500).json({message: "Schedule has been reserved !!!", success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }

}

//Student Chess Reservation Page
studentController.ChessReservationPage = (req, res) => {
    res.render('studentChessReservationPage');
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
        if(i.reservationTime=='09:00AM - 09:30AM'){
            scheduleStatus[1] = 'disabled'
        }else if(i.reservationTime=='09:30AM - 10:00AM'){
            scheduleStatus[2] = 'disabled'
        }else if(i.reservationTime=='10:00AM - 10:30AM'){
            scheduleStatus[3] = 'disabled'
        }else if(i.reservationTime=='10:30AM - 11:00AM'){
            scheduleStatus[4] = 'disabled'
        }else if(i.reservationTime=='11:00AM - 11:30AM'){
            scheduleStatus[5] = 'disabled'
        }else if(i.reservationTime=='11:30AM - 12:00PM'){
            scheduleStatus[6] = 'disabled'
        }else if(i.reservationTime=='12:00PM - 12:30PM'){
            scheduleStatus[7] = 'disabled'
        }else if(i.reservationTime=='12:30PM - 01:00PM'){
            scheduleStatus[8] = 'disabled'
        }else if(i.reservationTime=='01:00PM - 01:30PM'){
            scheduleStatus[9] = 'disabled'
        }else if(i.reservationTime=='01:30PM - 02:00PM'){
            scheduleStatus[10] = 'disabled'
        }else if(i.reservationTime=='02:00PM - 02:30PM'){
            scheduleStatus[11] = 'disabled'
        }else if(i.reservationTime=='02:30PM - 03:00PM'){
            scheduleStatus[12] = 'disabled'
        }else if(i.reservationTime=='03:00PM - 03:30PM'){
            scheduleStatus[13] = 'disabled'
        }else if(i.reservationTime=='03:30PM - 04:00PM'){
            scheduleStatus[14] = 'disabled'
        }else if(i.reservationTime=='04:00PM - 04:30PM'){
            scheduleStatus[15] = 'disabled'
        }else if(i.reservationTime=='04:30PM - 05:00PM'){
            scheduleStatus[16] = 'disabled'
        }
    }
    res.json({scheduleStatus});
}

//Student chess book
studentController.chessBook = async (req, res) => {
    //const reservationStatus = "Not Attended";

    const newSchedule = new Schedule({
        studentID: req.id,
        game : "Chess",
        reservationDate : req.body.dateSearch,
        reservationTime : req.body.reservedTime,
        board : req.body.board,
    });

    try {
        await newSchedule.save();
        res.status(500).json({message: "Schedule has been reserved !!!", success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
    }

}

//Student Carrom Reservation Page
studentController.CarromReservationPage = (req, res) => {
    res.render('studentCarromReservationPage');
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
        if(i.reservationTime=='09:00AM - 09:30AM'){
            scheduleStatus[1] = 'disabled'
        }else if(i.reservationTime=='09:30AM - 10:00AM'){
            scheduleStatus[2] = 'disabled'
        }else if(i.reservationTime=='10:00AM - 10:30AM'){
            scheduleStatus[3] = 'disabled'
        }else if(i.reservationTime=='10:30AM - 11:00AM'){
            scheduleStatus[4] = 'disabled'
        }else if(i.reservationTime=='11:00AM - 11:30AM'){
            scheduleStatus[5] = 'disabled'
        }else if(i.reservationTime=='11:30AM - 12:00PM'){
            scheduleStatus[6] = 'disabled'
        }else if(i.reservationTime=='12:00PM - 12:30PM'){
            scheduleStatus[7] = 'disabled'
        }else if(i.reservationTime=='12:30PM - 01:00PM'){
            scheduleStatus[8] = 'disabled'
        }else if(i.reservationTime=='01:00PM - 01:30PM'){
            scheduleStatus[9] = 'disabled'
        }else if(i.reservationTime=='01:30PM - 02:00PM'){
            scheduleStatus[10] = 'disabled'
        }else if(i.reservationTime=='02:00PM - 02:30PM'){
            scheduleStatus[11] = 'disabled'
        }else if(i.reservationTime=='02:30PM - 03:00PM'){
            scheduleStatus[12] = 'disabled'
        }else if(i.reservationTime=='03:00PM - 03:30PM'){
            scheduleStatus[13] = 'disabled'
        }else if(i.reservationTime=='03:30PM - 04:00PM'){
            scheduleStatus[14] = 'disabled'
        }else if(i.reservationTime=='04:00PM - 04:30PM'){
            scheduleStatus[15] = 'disabled'
        }else if(i.reservationTime=='04:30PM - 05:00PM'){
            scheduleStatus[16] = 'disabled'
        }
    }
    res.json({scheduleStatus});
}

//Student Carrom book
studentController.carromBook = async (req, res) => {
    //const reservationStatus = "Not Attended";

    const newSchedule = new Schedule({
        studentID: req.id,
        game : "Carrom",
        reservationDate : req.body.dateSearch,
        reservationTime : req.body.reservedTime,
        board : req.body.board,
    });

    try {
        await newSchedule.save();
        res.status(500).json({message: "Schedule has been reserved !!!", success:true});
    } catch (err) {
        res.status(200).json({message: err.message,success:false});
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

module.exports = studentController;