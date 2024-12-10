const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    thumbnail_image: String,
    event_files: [String], // Change this to an array of strings
    event_date: { type: Date, required: true },
    start_date: Date,
    end_date: Date
});

module.exports = mongoose.model('events', eventSchema);