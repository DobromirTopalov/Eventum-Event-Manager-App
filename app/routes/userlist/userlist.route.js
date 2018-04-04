const {
    Router,
  } = require('express');
  
  const SearchController = require('../search/search.controller');
  
  const init = (app, data) => {
        const router = new Router();
        const controller = new SearchController(data);
        router
        .get('/', async (req, res) => {
            const queryData = req.query;
            const usersAll = await controller
                .userQuery(queryData.keywords, queryData.usertype);

            const users = {
                ...usersAll,
            };
            const context = {
                users,
            };

            res.render('./userlist/userlist', context);
        });
      app.use('/users', router);
  };

  module.exports = {
    init,
  };
