//external imports
const mongoose = require('mongoose');


const adminSchema = mongoose.Schema({
    id:{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
});

const adminModel = mongoose.model('admin',adminSchema);

module.exports = adminModel;