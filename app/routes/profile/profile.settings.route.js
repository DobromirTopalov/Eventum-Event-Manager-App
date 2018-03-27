const {
  Router,
} = require('express');

const init = (app, data) => {
  const router = new Router();

  router
  .get('/settings', async (req, res) => {
    const context = {};
    res.render('./profile/settings', context);
  });

  app.use('/', router);
};

module.exports = {
  init,
};
