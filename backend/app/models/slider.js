const mongoose = require('mongoose');

const videoURLSchema = new mongoose.Schema({
    video_url: String,
});

module.exports = mongoose.model('sliders', videoURLSchema);