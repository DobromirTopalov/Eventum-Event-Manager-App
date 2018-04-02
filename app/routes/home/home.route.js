const {
  Router,
} = require('express');

const init = (app, data) => {
  const router = new Router();

  router
  .get('/', async (req, res) => {
    // Home route comes from setUp-sroutes.js
  });

  app.use('/', router);
};

module.exports = {
  init,
};
