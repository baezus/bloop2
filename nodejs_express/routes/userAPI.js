const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const Profile = require('../app/models/user');
const { forwardAuthenticated } = require('../config/auth');
const passport = require('passport');
console.log('db: ', Profile);

router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

router.post('/register', (req, res) => {
  const { name, photo, email, password, zipcode, bloop, bleep } = req.body;
  Profile.findOne({ email: email }).then(user => {
    if (user) {
      return console.log('email already exists!')
    }
    else {
      const newUser = new user({
        name, photo, email, password, zipcode, bloop, bleep
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.redirect('/login');
            })
          .catch(err=>console.log(err));
        });
      });
    }
  });
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
