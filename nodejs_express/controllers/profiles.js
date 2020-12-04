const db = require('../app/models');

const index = (req, res) => {
  db.Profile.find({})
    .then((foundProfiles) => {
        res.json({ profiles: foundProfiles });
    })
    .catch((err) => {
      console.log('Error in the controllers/profiles index.', err);
      res.json({ Error: 'unable to get your data ! '});
    });
};

const show = (req, res) => {
  db.Profile.findById(req.params.id)
    .then((foundProfile) => {
        res.json({ profile: foundProfile })
    })
    .catch((err) => {
      console.log('Error in the controllers show', err);
      res.json({ Error: 'Unable to get the profile.'});
    });
};

const create = (req, res) => {
  db.Profile.create(req.body)
    .then((savedProfile) => {
        res.status(201).json({ profile: savedProfile });
    })
    .catch((err) => {
      console.log('Error in the controllers create', err);
      res.json({ Error: 'Unable to create the profile.'});
    });
};

const update = (req, res) => {
  db.Profile.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedProfile) => {
      if (err) console.log('Error in profile update.', err);
      updatedProfile.save();
      res.json({ updatedProfile})
    } 
  );
};

const destroy = (req, res) => {
  db.Profile.findByIdAndDelete(req.params.id, (err, deletedProfile) => {
    if (err) console.log('Error in profile destroy: ', err);
    console.log(deletedProfile);
    res.json({ profile: deletedProfile });
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};


