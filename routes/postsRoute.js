//imports
const express = require('express');
const Posts = require('../models/postModel');

const router = express.Router();

//ROUTES
//get request to return data to browser
router.get('/', (req, res) => {
    res.send('Hello World');
  });

//post request
router.post('/', (req,res) => {
  console.log(req.body);
})

//exporting module- making available in other files
module.exports = router;