const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    result_file: String,
    result_category: String,
});

module.exports = mongoose.model('results', resultSchema);