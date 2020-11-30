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
