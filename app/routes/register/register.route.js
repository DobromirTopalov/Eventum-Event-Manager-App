const {
  Router,
} = require('express');

const init = (app, data) => { 
  const router = new Router();

  router
  .get('/register', async (req, res) => {
    const context = {};
    res.render('./register/register', context);
  })
  .get('/register/user', async (req, res) => {
    const context = {};
    res.render('./register/user-register', context);
  })
  .get('/register/artist', async (req, res) => {
    const context = {};
    res.render('./register/artist-register', context);
  });    

  app.use('/', router);
}

module.exports = {
  init,
};