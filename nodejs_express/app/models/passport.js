// app/models/user.js
const mongoose = require('mongoose');

const passportSchema = mongoose.Schema({

  username : String,
  password : String,
  
});


//create the model and link it
const Passport = mongoose.model('Passport', passportSchema);
module.exports = Passport