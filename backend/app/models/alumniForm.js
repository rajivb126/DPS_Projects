const mongoose = require('mongoose');

const alumniFormSchema = new mongoose.Schema({
    sname:String,
    fname:String,
    yearofpassout:Number,
    nyearschool:Number,
    address:String,
    contact:Number,
    aemail:String,
    presentpos:String,
    refteachers:String,
    refprincipal:String,
    photo:String
});

module.exports = mongoose.model("alumniForms", alumniFormSchema);