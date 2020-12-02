// app/models/user.js
const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({

  name: String,
  photo: String, //should be a link to static? Or ?
  zipcode: Number,
  lastGeo: Array,
  bloop: String,
  bleep: String,
  inbox: Array,
  passport: String
  
});


//create the model and link it
const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile