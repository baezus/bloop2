const bcrypt = require('bcrypt-nodejs')
const Q = require('q');
require('dotenv').config();

let mongoUrl = process.env.MONGODB_URI
const MongoClient = require('mongodb').MongoClient

const localReg = function (username, password) {
  let deferred = Q.defer();

  MongoClient.connect(mongoUrl, function (err, db) {
    if (err) return console.log('Error on localReg.js: ', err);
    let collection = db.collection('profiles');

    collection.findOne({ 'username' : username })
      .then(function (res) {
        if (null != result) {
          console.log(`Username ${res.username} found!`);
          deferred.resolve(false);
        }
        else {
          let hash = bcrypt.hashSync(password, 8);
          let user = {
            'username': username,
            'password': hash,
            'photo': 'http://placepuppy.it/images/homepage/Beagle_puppy_6_weeks.JPG'
          }

          console.log('CREATING USER: ', username);
          collection.insert(user)
            .then(function () {
              db.close();
              deferred.resolve(user);
            });
        }
      });
  });
  
  return deferred.promise;
}

module.exports = localReg;