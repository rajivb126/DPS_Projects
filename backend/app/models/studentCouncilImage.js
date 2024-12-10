const mongoose = require('mongoose');

const schoolStudentSchema = new mongoose.Schema({
    student_council_image:String,
    student_image_category:String,
    start_date: Date,
    end_date: Date
});

module.exports = mongoose.model('studentcouncil', schoolStudentSchema);