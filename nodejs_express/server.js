//Express Config

const express = require('express');
const app = express();
const port = process.env.PORT || 2737;
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.static(__dirname));
require('dotenv').config();

//configuration
mongoose.connect(process.env.MONGODB_URI);
//require('./config/passport')(passport);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//passport setup via express-session
app.use(session({
  secret: 'bolobrazy',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// const Schema = mongoose.Schema;
// const UserDetail = new Schema({
//   username: String,
//   password: String
// });

// UserDetail.plugin(passportLocalMongoose);
// const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

// //Passport Local Authentication

// passport.use(UserDetails.createStrategy());
// passport.serializeUser(UserDetails.serializeUser());
// passport.deserializeUser(UserDetails.deserializeUser());

// //Routes

// const connectEnsureLogin = require('connect-ensure-login');

// app.post('/login', (req, res, next) => {
//   passport.authenticate('local', 
//   (err, user, info) => {
//     if (err) {
//       return next(err);
//     }

//     if (!user) {
//       return res.redirect('/login?info=' + info);
//     }

//     req.logIn(user, function(err) {
//       if (err) {
//         return next(err);
//       }

//       return res.redirect('/');
//     });

//   })(req, res, next);
// });

// app.get('/login',
//   (req, res) => res.sendFile('html/login.html',
//   { root: __dirname })
// );

// app.get('/',
// connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.sendFile('html/index.html', {root: __dirname}));

// app.get('/private',
//   connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.sendFile('html/private.html', {root: __dirname}));

// app.get('/user',
//   connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.send({ user: req.user }));

require('./app/routes.js')(app, passport);

// Server start
app.listen(port, () => console.log('Server running on port ' + port));


//Register some dummy users
// UserDetails.register({username:'paul', active: false}, 'paul');
// UserDetails.register({username:'jay', active: false}, 'jay');
// UserDetails.register({username:'roy', active: false}, 'roy');
