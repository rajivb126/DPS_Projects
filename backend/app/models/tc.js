const mongoose = require('mongoose')

const tcSchema = new mongoose.Schema({
    tc_sname:String,
    tc_number: Number,
    tc_image: String,
    upload_date: Date
});

module.exports = mongoose.model('transfercertificates', tcSchema);