const {
  Router,
} = require('express');
const flash = require('connect-flash');
const passport = require('passport');

const init = (app, data) => {
  const router = new Router();
  app.use(flash());
  router
  .get('/login', async (req, res) => {
    const context = { error: req.flash().error };
    // If the user is logged, redirect him
    if (req.user) {
      res.redirect('/profile');
    }

    res.render('./login/login', context);
  });

  app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
    })
);


  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.use('/', router);
};

module.exports = {
  init,
};
