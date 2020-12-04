const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({

  email: String,
  name: String,
  spot: String,
  bloop: String,
  bleep: String,
  inbox: Array,
  passport: String
  
});


//create the model and link it
const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile