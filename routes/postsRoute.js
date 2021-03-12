//imports
const express = require('express');

const router = express.Router();

//ROUTES
//get request to return data to browser
router.get('/', (req, res) => {
    res.send('Hello World');
  });

  router.get('/specific', (req, res) => {
    res.send('Specific posts');
  });



//exporting module- making available in other files
module.exports = router;