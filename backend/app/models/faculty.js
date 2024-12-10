const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    teacher_name: String,
    teacher_email:String,
    teacher_subject:String,
    teacher_wing: String,
    teacher_image:String
});

module.exports = mongoose.model('faculties', facultySchema);