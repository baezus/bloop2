//-------------------------------------Express & MongoDB Config

const express = require('express');
const port = process.env.PORT || 2737;
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const userAPI = require('./routes/userAPI')
//--------------------------------------MIDDLEWARE
const passport = require('passport');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const localAuth = require('./config/localAuth');
const localReg = require('./config/localReg');

app.use(express.static(__dirname));
require('dotenv').config();

//-------------------------------------MONGOOSE CONFIG
mongoose.Promise = global.Promise;
//------------------------------------MIDDLEWARE USE
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

//----------------------------------------PASSPORT

app.use(session({
  secret: 'bolobrazy',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  console.log('serializing ' + user.username);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log('deserializing '+ obj);
  done(null, obj);
})

// ----------------------------------------PASSPORT LOGIN

passport.use('local-signin', new LocalStrategy(
  {passReqToCallback : true},
  function(req, username, password, done) {
    localAuth(username, password)
      .then(function (user) {
          if (user) {
            console.log('Logged in as : ', + user.username);
            //here is where i would use something like flash??
            done(null, user);
          }
          if (!user) {
            console.log('Could not log in.');
            done(null, user);
          }
      })
      .fail(function (err) {
          console.log('Error!: '+ err.body);
      })
  }
))

//---------------------------------------PASSPORT REGISTER

passport.use('local-signup', new LocalStrategy(
  {passReqToCallback:true},
  function(req, username, password, done) {
    localReg(username, password)
      .then(function (user) {
        if (user) {
          console.log('Registered!: '+user.username);
          //space for flash ehre
          done(null, user);
        }
        if (!user) {
          console.log('Could not register!');
          done(null, user);
        }
      })
      .fail(function (err) {
          console.log('Error signing up: ' + err.body);
      });
    }
));

function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  //flash message here
  console.log('please sign in !');
  res.redirect('/signin');
}

//--------------------------------------STACK ROUTES
const db = require('./app/models/index');
app.use('/users', userAPI);
console.log(db.Profile)

app.get('/', (req, res) => {
  console.log('urrrrr thereee at home');
  res.json({ message: 'API working' })
})

app.get('/signin', function(req, res) {
  res.redirect('/users/signin');
  // ({ message: 'signin page' });
});

app.post('/local-reg', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signin'
}));

app.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/',
  failureRedirect: '/signin'
}));

app.get('/logout', function (req, res) {
  let name = req.user.username;
  console.log('Logging out: ' + req.user.username);
  res.logout();
  res.redirect('/');
  //flash message including name
});

// Server start
app.listen(port, () => console.log('Server running on port ' + port));
