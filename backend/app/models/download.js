const mongoose = require('mongoose');

const downloadSchema = new mongoose.Schema({
    download_heading: String,
    download_link: String,
    start_date: Date,
    end_date: Date
});

module.exports = mongoose.model('downloads', downloadSchema);