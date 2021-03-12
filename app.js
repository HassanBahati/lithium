//imports
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

//intialise express
const app = express();

//import middleware --function that excutes when routes are being hit
const postRoute = require('./routes/postsRoute');


//CONNECT TO DATABASE
//mongoose a package that helps to connect database
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => {console.log('connected to DB');}
);

//route
app.get('/', (req,res) => {
    res.send('We are on home route');
})

//instantiating routes
app.use('/posts', postRoute); 


//setting where the server listens
app.listen(3000, () => {
  console.log('server listening on port 3000');
});

//NPM install dotenv
