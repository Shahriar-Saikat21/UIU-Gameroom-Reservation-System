//external imports
const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({
    storage : storage,
    limits : {
        fileSize : 10000000000 //MB
    },
    fileFilter : (req,file,cb)=>{
        if(file.mimetype==='image/png'||file.mimetype==='image/jpg'||file.mimetype==='image/jpeg'){
            cb(null,true);
        }else{
            //cb(null,false);
            cb(new Error('File type not supported...')); //this error will be handle in custom error handle
        }
    }
});

module.exports = upload;