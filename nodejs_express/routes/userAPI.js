const express = require('express');
const router = express.Router();
const Profile = require('../app/models/user.js');
const { forwardAuthenticated } = require('../config/auth');
const passport = require('passport');


router.post('/signup', async (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  console.log(newUser.photo);
  Profile.create(newUser, (err, userMade) => {
    if (err) return console.log(err);
    console.log('User made: ', userMade);
    userMade.save();
  });
  res.redirect('http://localhost:3000')
});

//Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  })(req, res, next);
});

router.get('/logout', function (req, res) {
  let name = req.user.username;
  console.log('Logging out: ' + req.user.username);
  res.logout();
  res.redirect('/');
  //flash message including name
});

module.exports = router;
