const {
  Router,
} = require('express');

const init = (app, data) => { 
  const router = new Router();

  router
  .get('/', async (req, res) => {
    const context = {};
    res.render('./home/home', context);
  });
  
  app.use('/', router);

}

module.exports = {
  init,
};