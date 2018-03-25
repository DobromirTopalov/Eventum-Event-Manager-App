const {
  Router,
} = require('express');

const init = (app, data) => { 
  const router = new Router();
  router
  .get('/artist', async (req, res) => {
    const context = {};
    res.render('./artist/artistpage', context);
  });  

  app.use('/', router);

}

module.exports = {
  init,
};