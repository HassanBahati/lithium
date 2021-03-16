//imports
const mongoose = require('mongoose');

//schema -- structure and how the data is expected to look 
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