const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: String,
    mp3: String,
    image: String,
    released: Date
}, { timestamps: true});

module.exports = mongoose.model('Song', songSchema);