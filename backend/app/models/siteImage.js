const mongoose = require('mongoose');

const siteImageSchema = new mongoose.Schema({
    site_image_file: String,
    upload_date: Date
});

module.exports = mongoose.model('siteimages', siteImageSchema);