//imports
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');

//intialise express
const app = express();

//middleware --function that excutes when routes are being hit
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//importing routes
const postRoute = require('./routes/postsRoute');

// Static folder
app.use(express.static(__dirname + '/views/'));

//
app.set('view engine', 'html');

//CONNECT TO DATABASE
//mongoose a package that helps to connect database
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => {console.log('connected to DB');}
);

//primary route
app.get('/', (req,res) => {
    res.send('We are on home route');
});

//instantiating routes
app.use('/posts', postRoute); 


//setting where the server listens
app.listen(3000, () => {
  console.log('server listening on port 3000');
});
