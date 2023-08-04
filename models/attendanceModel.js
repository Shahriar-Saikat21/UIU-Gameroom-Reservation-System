//external imports
const mongoose = require('mongoose');


const attendanceSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    employeeID:{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    mobile : {
        type : String,
        required : true,
    }
});

const attendanceModel = mongoose.model('attendance',attendanceSchema);

module.exports = attendanceModel;