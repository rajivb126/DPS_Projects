const mongoose = require('mongoose');

const websiteFileSchema = new mongoose.Schema({
    website_file:String
});

module.exports = mongoose.model('websiteFile', websiteFileSchema);