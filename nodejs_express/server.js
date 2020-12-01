//-------------------------------------Express & MongoDB Config

const express = require('express');
const port = process.env.PORT || 2737;
const path = require('path');
const app = express();
const userAPI = require('./routes/userAPI')
const indexAPI = require('./routes/index')
const mongoose = require('mongoose');
const maybeDB = require('./app/models/index');

//--------------------------------------MIDDLEWARE
const passport = require('passport');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const corsOptions = {
  supports_credentials: true
};

//------------------------------------MIDDLEWARE USE
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors(corsOptions));

//----------------------------------------PASSPORT

app.use(session({
  secret: 'bolobrazy',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//-------------------------------------- ROUTES
app.use('/', indexAPI);
app.use('/users', userAPI); 

// Server start
app.listen(port, () => console.log('Server running on port ' + port));
