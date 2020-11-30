// app/routes.js

module.exports = function(app, passport) {

//login
app.get('/login', function(req, res) {
  //Here you would render the LOG-IN page.
});

//process the login form
// // app.post('/login', passport.authenticate('local-login', {
//   successRedirect : '/profile',
//   failureRedirect : '/login',
// }));

//signup
app.get('/signup', function(req, res) {
  //Here you would render the SIGN-UP page.
})

//process the signup form
//app.post('/signup', passport.authenticate('local-signup', {
//   successRedirect : '/profile',
//   failureRedirect : '/signup',
// }));

//we will want middleware to verify here that you are logged in
app.get('/profile', isLoggedIn, function(req, res) {
  //here we would render all this stuff ... 
  //res.render('profile.ejs', { user: req.userr })
});

//logout
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
};

//route middleware to make sure a user is logged in:
function isLoggedIn(req, res, next) {

  //if the user is authenticated, gjo on
  if (req.isAuthenticated())
    return next();
  
  //if they aren't redirect them to the home page.
  // res.redirect('/');
}