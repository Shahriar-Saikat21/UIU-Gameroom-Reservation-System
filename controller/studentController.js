const studentController = {};

studentController.studentHomePage = (req,res)=>{
    res.render('studentHomePage');
};


//Student TT Reservation Page
studentController.TTReservationPage = (req, res) => {
    res.render('StudentTTReservationPage');
}

module.exports = studentController;