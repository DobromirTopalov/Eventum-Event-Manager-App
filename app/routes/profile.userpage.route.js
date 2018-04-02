const {
  Router,
} = require('express');

const init = (app, data) => {
  const router = new Router();

  router
    .get('/', async (req, res) => {
      if (!req.user) {
        return res.redirect('/login');
      }

      return res.redirect('/profile/' + req.user.username);
    })
    .get('/:theUser', async (req, res) => {
      if (!req.user) {
        return res.redirect('/login');
      }

      const userName = req.params.theUser;
      const userInfo = await data.users.findByUsername(userName);
      const account = userInfo;

      return res.render('./profile/user-profile', { account });
    })
    .get('/:theUser/event', async (req, res) => {
      if (!req.user) {
        return res.redirect('/login');
      }

      const userName = req.params.theUser;
      const userInfo = await data.users.findByUsername(userName);
      const account = userInfo;

      return res.render('./profile/user-event', { account });
    });

  app.use('/profile', router);
};

module.exports = {
  init,
};
