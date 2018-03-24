const {
  Router,
} = require('express');

const init = (app, data) => { 
  const router = new Router();

  router
  .get('/user', async (req, res) => {
    const context = {};
    res.render('./profile/user-settings', context);
  })
  .get('/artist', async (req, res) => {
    const context = {};
    res.render('./profile/artist-settings', context);
  });    

  app.use('/', router);

}

module.exports = {
  init,
};