// app/models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({

  local: {
    email : String,
    password : String,
  },
  name: String,
  photo: String, //should be a link to static? Or ?
  zipcode: Number,
  lastGeo: Array,
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
const UserDoc = mongoose.model('UserDoc', userSchema);
module.exports = UserDoc;