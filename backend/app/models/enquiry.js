const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema({
    ename:String,
    email:String,
    emobile:Number,
    ecomment:String,
    efile:String
});

module.exports = mongoose.model('enquiries', enquirySchema);