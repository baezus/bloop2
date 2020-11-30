const bcrypt = require('bcryptjs')
const Q = require('q');
require('dotenv').config();

let mongoUrl = process.env.MONGODB_URI
const MongoClient = require('mongodb').MongoClient

const localAuth = function (username, password) {
  let deferred = Q.defer();

  MongoClient.connect(mongoUrl, function (err, db) {
    if (err) return console.log('Error on localAuth.js: ', err);
    let collection = db.collection('profiles');

    collection.findOne({ 'username' : username })
      .then(function (res) {
        if (null == result) {
          console.log('Username not found!: ', username);
          deferred.resolve(false);
        }
        else {
          let hash = res.password;
          console.log('Found user!: ', res.username);

          if (bcrypt.compareSync(password, hash)) {
            deferred.resolve(result);
          } else {
            console.log('Authentication failed!!!');
            deferred.resolve(false);
          }
        }

        db.close();
      });
  });
  
  return deferred.promise;
}

export default localAuth;