const mongoose = require('mongoose');

const assemblySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    thumbnail_image: String,
    assembly_files: [String], // Change this to an array of strings
    assembly_date: { type: Date, required: true },
    start_date: Date,
    end_date: Date
});

module.exports = mongoose.model('assemblies', assemblySchema);