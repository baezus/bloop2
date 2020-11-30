// const LocalStrategy = require('passport-local').Strategy;

// const User = require('../app/models/user');

// module.exports = function(passport) {
  
//   //used to serialize the user for the session
//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   //used to deserialize the user
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });

//   passport.use('local-signup', newLocalStrategy({
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true
//   },
//   function(req, email, password, done) {

//     //asynchronous
//     // User.findOne wont fire unless data is sent back
//     process.nextTick(function() {

//       //find a user whose name is the same as the form email

//       User.findOne({ 'local.email' : email }, function(err, user) {
//         if (err) return done(err);

//         if (user) {
//           return done(null, false)
//         } else {

//           const newUser = new User();
//           newUser.local.email = email;
//           newUser.local.password = newUser.generateHash(password);

//           newUser.save(function(err) {
//             if (err)
//               throw err;
//             return done(null, newUser);
//           });
//         }
//       });
//     });
//   }));
//   passport.use('local-login', new LocalStrategy({
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true
//   },
//   function(req, email, password, done) {

//     User.findOne({ 'local.email' : email }, function(err, user) {
//       if(err) return done(err);

//       if (!user)
//         return done(null, false);
      
//       if (!user.validPassword(password))
//         return done(null, false, console.log('wrong password'));

//       return done(null, user);
//     });

//   }));
// };