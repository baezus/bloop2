//-------------------------------------Express & MongoDB Config

const express = require('express');
const port = process.env.PORT || 2737;
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const userAPI = require('./routes/userAPI')
const indexAPI = require('./routes/index')
//--------------------------------------MIDDLEWARE
const passport = require('passport');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: "./static"});

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

//-------------------------------------- ROUTES
const db = require('./app/models/index');
app.use('/', indexAPI);
app.use('/users', userAPI); //this is what is sending my multer awry
console.log(db.Profile)

// Server start
app.listen(port, () => console.log('Server running on port ' + port));
