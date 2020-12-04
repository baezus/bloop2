const db = require('../app/models');

const index = (req, res) => {
  db.Bloop.find({})
    .then((foundBloops) => {
        res.json({ bloops: foundBloops });
    })
    .catch((err) => {
      console.log('Error in the controllers/bloops index.', err);
      res.json({ Error: 'unable to get your data ! '});
    });
};


const create = (req, res) => {
  db.Bloop.create(req.body)
    .then((savedBloop) => {
        res.status(201).json({ bloop: savedBloop });
    })
    .catch((err) => {
      console.log('Error in the controllers create', err);
      res.json({ Error: 'Unable to create the bloop.'});
    });
};

module.exports = {
  index,
  create,  
};
