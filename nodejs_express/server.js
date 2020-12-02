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

console.log(io);

//-------------------------------------Socket.io Config

app.use(express.static(__dirname + '/static'))
app.use(express.static('public'))
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

//-------------------------------------Routes & Mongoose Config
const userAPI = require('./routes/userAPI')
const indexAPI = require('./routes/index')
const mongoose = require('mongoose');
const maybeDB = require('./app/models/index');

//--------------------------------------MIDDLEWARE
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');

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
app.use(bodyParser.urlencoded({ extended: false }));


const DUMMY_USER = {
  id: 1,
  username: "john",
};

passport.use(
  new LocalStrategy((username, password, done) => {
    if (username === "john" && password === "doe") {
      console.log("authentication OK");
      return done(null, DUMMY_USER);
    } else {
      console.log("wrong credentials");
      return done(null, false);
    }
  })
);

app.get('/', (req, res) => {
  const isAuthenticated = !!req.user;
  if (isAuthenticated) {
    console.log(`user is authenticated, session is ${req.session.id}`);
  } else {
    console.log('unknown user');
  }
  res.sendFile(isAuthenticated ? "index.html" : "login.html", { root: __dirname });
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
  })
);

app.post('/logout', (req, res) => {
  console.log(`logout ${req.session.id}`);
  const socketId = req.session.socketId;
  if (socketId && io.of('/').connected[socketId]) {
    console.log(`forcefully closing socket ${socketId}`);
    io.sockets.connected[socketId].disconnect(true);
  }
  req.logout();
  res.cookie('connect.sid', '', { expires: new Date() });
  res.redirect('/');
});



//-------------------------------------- ROUTES

// app.use('/users', userAPI); 

passport.serializeUser((user, cb) => {
  console.log(`serializeUser ${user.id}`);
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  console.log(`deserializeUser ${id}`);
  cb(null, DUMMY_USER);
});

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

io.use(wrap(sessionMiddleware));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));

io.use((socket, next) => {
  if (socket.request.user) {
    next();
  } else {
    next(new Error('unauthorized'))
  }
});

io.on('connect', socket => {
  const { id } = socket.client;
  console.log(`User connected: ${id}`);
  socket.on('chat message', ({ nickname, msg }) => {
    io.emit('chat message', { nickname, msg });
  });
  socket.on('whoami', (cb) => {
    cb(socket.request.user ? socket.request.user.username : '');
  });

  const session = socket.request.session;
  console.log(`saving sid ${socket.id} in session ${session.id}`);
  session.socketId = socket.id;
  session.save();
});

server.listen(process.env.PORT || 2737, function () {
  console.log('Server is running on localhost: 2737!')
});

