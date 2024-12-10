const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    newsletter_heading: String,
    newsletter_link: String,
    start_date: Date,
    end_date: Date
});

module.exports = mongoose.model('newsletters', newsletterSchema);