const mongoose = require('mongoose');

const siteImageSchema = new mongoose.Schema({
    site_image_file:String,
    original_filename:String
});

module.exports = mongoose.model('siteimages', siteImageSchema);