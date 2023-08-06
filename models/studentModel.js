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
    image : {
        data: Buffer,
        contentType : String
    },
    password : {
        type : String,
        required : true,
    },
    uiuInfo : {
        type : mongoose.Types.ObjectId,
        ref : 'studnetInfo',
    },
    status : {
        type : String,
        required : true,
    }
});

const studentModel = mongoose.model('gameRoomMember',studentSchema);

module.exports = studentModel;