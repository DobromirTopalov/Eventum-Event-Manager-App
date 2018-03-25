const {
  Router,
} = require('express');

const init = (app, data) => { 
  const router = new Router();

  router
  .get('/checkout', async (req, res) => {
    const context = {};
    res.render('./checkout/checkout', context);
  });    

  app.use('/', router);

}

module.exports = {
  init,
};