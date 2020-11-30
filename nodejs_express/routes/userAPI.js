const mongoose = require('mongoose');
const { default: Profile } = require('../../bloop/src/features/profiles/Profile');
const User = mongoose.model('users')

module.exports = (app) => {

  app.get(`/api/user`, async (req, res) => {
    let profiles = await User.find();
    return res.status(200).send(profiles);
  });

  app.post(`/api/user`, async (req, res) => {
    let profile = await Profile.create(req.body);
    return res.status(201).send({
      error: false,
      profile
    })
  });

  app.put(`/api/user/:id`, async (req, res) => {
    const {id} = req.params;

    let profile = await Profile.findByIdAndUpdate(id, req.body);
    
    return res.status(202).send({
      error: false,
      profile
    })
  });

  app.delete(`/api/user/:id`, async (req, res) => {
    const {id} = req.params
    
    let profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile
    })
  })
};