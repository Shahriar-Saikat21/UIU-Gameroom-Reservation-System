const adminController = {};

adminController.adminHomePage = (req, res) => {
    res.render('adminHomePage');
};


module.exports = adminController;