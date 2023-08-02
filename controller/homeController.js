const homeController = {}

//Home Page & Login Page
homeController.homePage = (req, res) => {
    res.render('homePage');  
};


//logout user
homeController.logoutUser = (req, res) => {
    res.clearCookie(process.env.COOKIE_NAME);
    res.status(500).json({success:true});
};

module.exports = homeController;