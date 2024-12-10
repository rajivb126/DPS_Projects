const mongoose = require('mongoose');

const infrastructureSchema = new mongoose.Schema({
    infrastructure_category: {
        type: String,
        required: true
    },
    infrastructure_image: {
        type: [String],
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('infrastructures', infrastructureSchema);