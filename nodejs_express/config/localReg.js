// const bcrypt = require('bcrypt-nodejs')
// const Q = require('q');
// const passport = require('passport');
// const { collection } = require('../app/models/user');
// require('dotenv').config();
// const LocalStrategy = require('passport-local').Strategy;

// let mongoUrl = process.env.MONGODB_URI
// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect(mongoUrl, function (err, db) {
//   if (err) return console.log('Error on localAuth.js: ', err);
//   const collection = db.collection('profiles');
// });

// module.exports = function (passport) {
//   passport.use(
//     new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//     let deferred = Q.defer();
//     collection.findOne({ 'email' : email })
//         .then(user => {
//           if (null == user) {
//             console.log('email not found!: ', email);
//             deferred.resolve(false);
//           }
          
//           else {
//             let hash = res.password;
//             console.log('Found user!: ', res.email);

//             if (bcrypt.compareSync(password, hash, (err, isMatch) => {
//               if (err) throw err;
//               if (isMatch) {
//                 return done(null, user);
//               } else {
//                 return done(null, false, {message: 'noooo'});
//               }}
//             ))
//             deferred.resolve(false);
//           }
//       });
//     })
//   );
//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function(id, done) {
//     collection.findById(id, function(err, user) {
//       done (err, user);
//     });
//   })
// }
