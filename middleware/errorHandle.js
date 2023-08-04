const createError = require('http-errors');

function notFoundHandler(req,res,next){
    next(createError(404,"Page not found"));
};

function errorHandler(err,req,res,next){
    if(err.message){
        res.status(500).send("<h1>"+ err.message +"</h1>");
    }else{
        res.status(500).send("<h1>There is serverside error</h1>");
    }
};

module.exports = {
    notFoundHandler,
    errorHandler
};