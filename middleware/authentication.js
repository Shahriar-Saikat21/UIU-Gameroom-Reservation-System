const jwt = require('jsonwebtoken');
const createError = require('http-errors');

function authentication(req, res, next) {
    try {
        const token = req.signedCookies[process.env.COOKIE_NAME];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const{id}=decoded;

        //send this data to next middleware to use if needed
        req.id = id;
        next();       
        
    } catch{
        next(createError(404,"Please Login First"));
    }
}

module.exports = authentication;