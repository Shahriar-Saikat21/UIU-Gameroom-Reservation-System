const homeController = {}

//Home Page & Login Page
homeController.homePage = (req, res) => {
    res.render('homePage');  
};

module.exports = homeController;