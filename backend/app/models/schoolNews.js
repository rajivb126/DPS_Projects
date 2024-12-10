const mongoose = require('mongoose');

const schoolnewsSchema = new mongoose.Schema({
    schoolnews_heading: String,
    schoolnews_link: String,
    schoolnews_description: String,
    start_date: Date,
    end_date: Date
});

module.exports = mongoose.model('schoolnews', schoolnewsSchema);