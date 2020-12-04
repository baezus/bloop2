const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({

  name: String,
  spot: String,
  bloop: String,
  bleep: String,
  sentBloops: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SentBloops'
  }],
  
});


//create the model and link it
const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile