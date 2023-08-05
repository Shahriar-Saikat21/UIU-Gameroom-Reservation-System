const studentController = {};

studentController.studentHomePage = (req,res)=>{
    res.render('studentHomePage');
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