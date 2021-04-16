//imports
const express = require('express');
const passport = require('passport');

//instanitating router
const router = express.Router();


//get a specific user
router.get('/:userId', async (req, res) => {
    try {
      const user = await Orders.findById(req.params.userId);
      res.json(user);
    } catch (err) {
      res.json({ message: err });
    }
  });
// // logging out 
// router.get('/', (req, res) => {
//     req.logOut();
//     res.redirect('/login')
// });

// checks username and password using passport
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
    res.json(req.session.user = req.user);
});

//exporting the router
module.exports = router;