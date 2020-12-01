//-------------------------------------Express Config
'use strict';
const http = require('http');
const express = require('express');
const port = process.env.PORT || 2737;
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
console.log(io);
//-------------------------------------Socket.io Config
// const io = socketIO(server);

// io.set('browser client minification', true);
// io.set('browser client etag', true);
// io.set('browser client gzip', true);
// io.set('browser client expires', true);

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
// app.use('/', indexAPI);
// app.get('/', function (req, res) {
//   res.send('hello world!');
//   console.log('root visited!');
//   io.emit('new_message', 'Hello io.world!');
// });

// Socket.io
// const connections = [];
// const title = "Untitled";

// io.sockets.on('connection', (socket) => {

//   socket.once('disconnect', () => {
//     connections.splice(connections.indexOf(socket), 1);
//     socket.disconnect();
//     console.log('Disconnected: %s. Remained: %s.', socket.id, connections.length)
//   })


// connections.push(socket);
// console.log('Connected: %s. Total: %s', socket.id, connections.length);

app.use('/users', userAPI); 

io.on('connection', socket => {
  const { id } = socket.client;
  console.log(`User connected: ${id}`);
  socket.on('chat message', ({ nickname, msg }) => {
    io.emit('chat message', { nickname, msg });
  });
});

// Server start
// app.listen(port, () => console.log('Server running on port ' + port));
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

server.listen(process.env.PORT || 2737, function () {
  console.log('Server is running on localhost: 2737!')
});

