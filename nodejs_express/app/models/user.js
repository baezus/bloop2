// app/models/user.js
// load the things we need
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

//define the schema for our user model
const userSchema = mongoose.Schema({

  local: {
    email : String,
    password : String,
  },
  name: String,
  photo: String, //should be a link to static? Or ?
  zipcode: Number,
  bloop: String,
  bleep: String,
  inbox: Array
});

//generate a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

//create the model and link it
module.exports = mongoose.model('User', userSchema);