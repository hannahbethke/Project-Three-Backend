const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: String,
    artist: String,
    photoCollection: String,
    image: String,
    dateAdded: String
}, { timestamps: true});

module.exports = mongoose.model('Song', songSchema);