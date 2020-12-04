const mongoose = require('mongoose');

const bloopSchema = mongoose.Schema({

  sender: String,
  content: String,
  
});

const Bloop = mongoose.model('Bloop', bloopSchema);
module.exports = Bloop;