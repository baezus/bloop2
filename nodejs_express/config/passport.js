const bcrypt = require('bcrypt-nodejs')
const Q = require('q');
require('dotenv').config();
const LocalStrategy = require('passport-local').Strategy;
let mongoUrl = process.env.MONGODB_URI
const MongoClient = require('mongodb').MongoClient

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
    let deferred = Q.defer();

    MongoClient.connect(mongoUrl, function (err, db) {
    if (err) return console.log('Error on localReg.js: ', err);
    let collection = db.collection('profiles');

    collection.findOne({ 'email' : email })
      .then(res => {
        if (!res) {
          return done(null, false, { message: 'Email not registered!'})
        }
        
        let hash = bcrypt.hashSync(password, 8);
        let user = {
          'email': email,
          'password': hash,
        }

        console.log('CREATING USER: ', email);
        collection.insert(user)
          .then(function () {
            db.close();
            deferred.resolve(user);
        });
      }
    );
    
})}))
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
};
