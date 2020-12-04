//-------------------------------------Express Config
'use strict';
const http = require('http');
const express = require('express');
const port = process.env.PORT || 2737;
const path = require('path');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

// console.log(io);

//-------------------------------------Socket.io Config

app.use(express.static(__dirname + '/static'))
app.use(express.static('public'))
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

//-------------------------------------Routes & Mongoose Config
const routes = require('./routes/')
const indexAPI = require('./routes/index')
const mongoose = require('mongoose');
const db = require('./app/models/index')
const passportDB = require('./app/models/passport');

//--------------------------------------MIDDLEWARE
const passport = require('passport');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');

require('dotenv').config();

const corsOptions = {
  supports_credentials: true
};

//------------------------------------MIDDLEWARE USE
app.use(cookieParser());
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors(corsOptions));

//----------------------------------------PASSPORT
const sessionMiddleware = session({ secret: 'bolobrazy', resave: false, saveUninitialized: false });
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));


//-------------------------------------- ROUTES

app.use('/api/v1/profiles', routes.profiles);
app.use('/api/v1/bloops', routes.bloops);

passport.serializeUser((user, cb) => {
  console.log(`serializeUser ${user.id}`);
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  console.log(`deserializeUser ${id}`);
  cb(null, DUMMY_USER);
});

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

let connectedUsers = [];
let sentMessages = [];

io.on('connection', socket => {
  const { id } = socket.client;
  console.log(`User connected: ${id}`);
  connectedUsers.push(id);
  console.log(`Current users: `, connectedUsers);

  socket.on('chat message', ({ nickname, msg }) => {
    sentMessages.push({ nickname, msg });
    db.Bloop.create({ 'sender': nickname, 'content': msg })
      .then((savedBloop) => {
        console.log('saved Bloop: ', savedBloop);
      })
      .catch((err) => {
        console.log('Error in the controllers create', err);
        res.json({ Error: 'Unable to create the bloop.'});
      });
    console.log('submitted a chat; sentMessages: ', sentMessages);
    io.emit('chat message', { nickname, msg });
  });
});

server.listen(process.env.PORT || 2737, function () {
  console.log('Server is running on localhost: 2737!')
});

