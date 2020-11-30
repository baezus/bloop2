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
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');

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
//require('./config/passport')(passport);
app.use(session({
  secret: 'bolobrazy',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//--------------------------------------STACK ROUTES
const db = require('./app/models/index');
app.use('/users', userAPI);


console.log(db.Profile)

app.get('/', (req, res) => {
  console.log('urrrrr thereee at home');
  res.json({ message: 'API working' })
})

// Server start
app.listen(port, () => console.log('Server running on port ' + port));
