//external imports
const mongoose = require('mongoose');


const scheduleSchema = mongoose.Schema({
    studentID:{
        type : mongoose.Types.ObjectId,
        ref : 'gameroommembers',
    },
    game : {
        type : String,
        required : true,
    },
    board : {
        type : String,
        required : true,
    },
    bookingDate : {
        type : Date,
        default : Date.now
    },
    reservationDate : {
        type : String,
        required : true,
    },
    reservationTime : {
        type : String,
        required : true,
    },
    reservationStatus:{
        type : String,
        required : true,
        default : "Not Attended"
    }
});

const scheduleModel = mongoose.model('schedule',scheduleSchema); 

module.exports = scheduleModel;