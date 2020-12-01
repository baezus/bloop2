const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy;
const Profile = require('../app/models/user');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
    Profile.findOne({ 'email' : email })
      .then(res => {
        if (!res) {
          return done(null, false, { message: 'Email not registered!'})
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect'});
          }
        });
      }
    );
}))

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Profile.findById(id, function(err, user) {
    done(err, user);
  });
});
};
