//external imports
const mongoose = require('mongoose');


const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    studentID:{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    }
});

const studentModel = mongoose.model('gameroommember',studentSchema);

module.exports = studentModel;