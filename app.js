//imports
const express = require('express');
const mongoose = require('mongoose');

//intialise express
const app = express();

// //middleware --function that ecutes when routes are being hit
// app.use('/posts', () => {
//     console.log('this is a middleware running')
// })

//ROUTES
//get request to return data to browser
app.get('/', (req, res) => {
  res.send('Hello World');
});

//CONNECT TO DATABASE
//mongoose a package that helps to connect database
mongoose.connect('datadase url', { useNewUrlParser: true }, () => {
  console.log('connected to DB');
});

//post request to submit data
app.get('/', (req, res) => {
  res.send('We are on posts');
});

//setting where the server listens
app.listen(3000, () => {
  console.log('server listening on port 3000');
});

//NPM install dotenv
