const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const db = require('../app/models');
console.log('db: ', db.Profile);

router.route('/create').post((req, res, next) => {
  db.Profile.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data);
      res.json(data)
    }
  })
});

router.route('/').get((req, res) => {
  db.Profile.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



module.exports = router;

// => {

//   app.get(`/api/user`, async (req, res) => {
//     await db.Profile.find({})
//       .then((err, foundProfiles) => {
//         if (err) return console.log('heeeeeeyyyyy from backend', err);
//         console.log('boop boop be doop: ', foundProfiles);
//       })
//     return res.status(200).send(foundProfiles) || console.log('pipe');
//   });

//   // app.post(`/api/user`, async (req, res) => {
//   //   let profile = await User.create(req.body);
//   //   return res.status(201).send({
//   //     error: false,
//   //     profile
//   //   })
//   // });

//   // app.put(`/api/user/:id`, async (req, res) => {
//   //   const {id} = req.params;

//   //   let profile = await User.findByIdAndUpdate(id, req.body);
    
//   //   return res.status(202).send({
//   //     error: false,
//   //     profile
//   //   })
//   // });

//   // app.delete(`/api/user/:id`, async (req, res) => {
//   //   const {id} = req.params
    
//   //   let profile = await User.findByIdAndDelete(id);

//   //   return res.status(202).send({
  //     error: false,
  //     profile
  //   })
  // })
