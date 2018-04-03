const {
  Router,
} = require('express');

const ProfileController = require('./profile/profile.controller');

const init = (app, data) => {
  const router = new Router();
  const controller = new ProfileController(data);

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

      if (userInfo.role === 'Artist') {
        account.eventInfo = await controller.getAllEventsByArtist(userInfo.id);
      } else {
        account.eventInfo = await controller.getAllEventsByUser(userInfo.id);
      }

      return res.render('./profile/user-profile', { account });
    })
    .get('/:theUser/event', async (req, res) => {
      if (!req.user) {
        return res.redirect('/login');
      }

      const userName = req.params.theUser;
      const userInfo = await data.users.findByUsername(userName);
      const account = userInfo;

      if (userInfo.role === 'Artist') {
        account.eventInfo = await controller
          .getAllEventsByArtistFull(userInfo.id);
      } else {
        account.eventInfo = await controller
          .getAllEventsByUserFull(userInfo.id);
      }

      return res.render('./profile/user-event', { account });
    });

  app.use('/profile', router);
};

module.exports = {
  init,
};
