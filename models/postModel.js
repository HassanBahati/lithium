//imports
const mongoose = require('mongoose');

//schema -- represents how the data looks
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//exporting schema
module.exports = mongoose.model('Posts',postSchema);