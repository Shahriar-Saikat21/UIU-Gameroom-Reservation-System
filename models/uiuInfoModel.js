//external imports
const mongoose = require('mongoose');


const uiuInfoSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    id:{
        type : String,
        required : true,
        unique : true
    }
});

const uiuInfoModel = mongoose.model('studentInfo',uiuInfoSchema);

module.exports = uiuInfoModel;