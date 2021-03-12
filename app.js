//imports
const express = require('express');

//intialise express
const app = express();

//ROUTES
//get request to return data to browser
app.get('/', (req,res) => {
    res.send('Hello World');
});

//post request to submit data
app.post('/', (req,res) => {
    res.send('We are on posts');
});


//setting where the server listens
app.listen(3000, () => {
    console.log('server listening on port 3000');
});