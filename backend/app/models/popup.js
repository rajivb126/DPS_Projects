const mongoose = require('mongoose');

const popupSchema = new mongoose.Schema({
    popup_header:String,
    popup_image:String,
    popup_link:String,
    start_date: Date,
    end_date: Date
});

module.exports = mongoose.model('popups', popupSchema);
