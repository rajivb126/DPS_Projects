const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function(request,response,callback){
            callback(null,'uploads');
        },
        filename: function(request,response,callback){
            callback(null,Date.now()+'.jpg');
        }
    })
}).single("image");

const multipleUpload = multer({
    storage: multer.diskStorage({
        destination: function(request,response,callback){
            callback(null,'uploads');
        },
        filename: function(request,response,callback){
            callback(null,Date.now()+'.jpg');
        }
    })
}).array("image");

module.exports = {
    upload: upload,
    multipleUpload: multipleUpload,
};