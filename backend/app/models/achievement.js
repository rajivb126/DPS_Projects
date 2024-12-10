const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    achievement_category:String,
    achievement_file:String,
    start_date: Date,
    end_date: Date
});

module.exports = mongoose.model('achievements', achievementSchema);