const express = require('express');
const router = express.Router();
const Registration = require('../models/usersModel')

//add user
router.post('/', async(req, res) => {
    try {
        const registration = new Registration(req.body);
        await Registration.register(registration, req.body.password, (err) => {
            if (err)
              { 
               throw err
              }
            res.json(registration);
        });
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
});

module.exports = router;