const mongoose = require('mongoose');

const newsupdateSchema = new mongoose.Schema({
    nname: String,
    news_category: String,
    nlink: String,
    start_date: Date,
    end_date: Date
});

module.exports = mongoose.model('news', newsupdateSchema);
