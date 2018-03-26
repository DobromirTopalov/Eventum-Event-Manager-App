const {
  Router,
} = require('express');

const init = (app, data) => { 
  const router = new Router();

  router
  .get('/recovery', async (req, res) => {
    const context = {};
    res.render('./recover/recover', context);
  });    

  app.use('/', router);

}

module.exports = {
  init,
};