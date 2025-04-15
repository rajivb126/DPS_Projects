const mongoose = require('mongoose');

const websiteFileSchema = new mongoose.Schema({
    website_file: String,
    upload_date: Date
});

module.exports = mongoose.model('websiteFile', websiteFileSchema);