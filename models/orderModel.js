//imports
const mongoose = require('mongoose');

//schema -- structure and how the data is expected to look 
const orderSchema = mongoose.Schema({
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
module.exports = mongoose.model('Orders',orderSchema);