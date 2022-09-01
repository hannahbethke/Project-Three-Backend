const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: String,
    artist: String,
    image: { 
        type: String,
        default: "https://cdn.pixabay.com/photo/2020/05/11/17/42/vinyl-5159342_960_720.jpg"
    },
    released: String
}, { timestamps: true});

module.exports = mongoose.model('Song', songSchema);