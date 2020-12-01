const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Profile = require('../app/models/user.js');
const { forwardAuthenticated } = require('../config/auth');
const passport = require('passport');
const bodyParser = require('body-parser');

router.post('/signup', (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  Profile.create(newUser, (err, userMade) => {
    console.log('User made: ', newUser);
    userMade.save().then(
    res.redirect('/'));
  })
  
      // bcrypt.genSalt(10, (err, salt) => {
      //   bcrypt.hash(newUser.password, salt) (err, hash) => {
      //     if (err) throw err;
      //     newUser.password = hash;
      //     newUser
      //       .save()
      //       .then(user => {
      //         res.redirect('/login');
      //       })
      //     .catch(err=>console.log(err));
      //   });
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
