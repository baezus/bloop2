const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// router.get('/', forwardAuthenticated, (req, res) => res.send('welcome'));

// router.get('/dashboard', ensureAuthenticated, (req, res) =>
//   res.send('dashboard', {
//     user: req.user
//   })
// );

module.exports = router;