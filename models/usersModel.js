//require mongoose
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

//create a schema for the data you need to save
const usersSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: 'Please Enter username'
    },
    email: {
        type: String,
        required: 'Please Enter email'
    }
});

usersSchema.plugin(passportLocalMongoose);
// usersSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

//export the mongoose model
module.exports = mongoose.model('Users', usersSchema);
