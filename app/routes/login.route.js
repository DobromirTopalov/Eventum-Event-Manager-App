const {
  Router,
} = require('express');

const init = (app, data) => { 
  const router = new Router();

  router
  .get('/login', async (req, res) => {
    const context = {};
    res.render('./login/login', context);
  });    

  app.use('/', router);

}

module.exports = {
  init,
};