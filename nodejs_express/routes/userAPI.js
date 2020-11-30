const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
//const User = mongoose.model('User');
const UserDoc = require('../app/models/user');
const UserModel = new UserDoc();
console.log('UserModel: ', UserModel);

module.exports = (app) => {

  app.get(`/api/user`, async (req, res) => {
    let profiles = await UserDoc.find({});
    console.log('boop boop be doop', UserModel);
    return res.status(200).send(profiles);
  });

  app.post(`/api/user`, async (req, res) => {
    let profile = await User.create(req.body);
    return res.status(201).send({
      error: false,
      profile
    })
  });

  app.put(`/api/user/:id`, async (req, res) => {
    const {id} = req.params;

    let profile = await User.findByIdAndUpdate(id, req.body);
    
    return res.status(202).send({
      error: false,
      profile
    })
  });

  app.delete(`/api/user/:id`, async (req, res) => {
    const {id} = req.params
    
    let profile = await User.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile
    })
  })
};