const express = require('express');
const router = express.Router();
const passportDB = require('../app/models/passport.js');
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;



passport.use(
  new LocalStrategy((username, password, done) => {

    //search the passport DB for a match
    const comparison = passportDB.find({ 'username': username })
    .then((err, foundPassport) => {
      if (err) return console.log(err);
      console.log(foundPassport);
        if (username === foundPassport.username && password === foundPassport.password) {
        console.log("authentication O K");
      return done(null, foundPassport);
    } else {
      console.log("wrong credentials");
      return done(null, false);
    }
  })}
));

router.post('/signup', async (req, res) => {
  console.log('req.body: ', req.body);
  const newUser = req.body;
  console.log('new user: ', newUser);
  
  passportDB.create(newUser, (err, userMade) => {
    if (err) return console.log(err);
    console.log('User made: ', userMade);
    userMade.save();
  });
  res.redirect('http://localhost:3000')
});

//Login
router.post('/login', async (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: 'http://localhost:3000'
  })(req, res, next);
});

//login GET route
// router.get('/login', async (req, res) => {
//   passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login'});
//     console.log('Logged in!');
// });

router.get('/logout', function (req, res) {
  let name = req.user.username;
  console.log('Logging out: ' + req.user.username);
  res.logout();
  res.redirect('/');
  //flash message including name
});

module.exports = router;
