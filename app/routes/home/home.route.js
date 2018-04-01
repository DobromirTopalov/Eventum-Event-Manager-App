const {
  Router,
} = require('express');

const init = (app, data) => {
  const router = new Router();

  router
  .get('/', async (req, res) => {
    let context = {};
    if (req.user) {
      const userID = await req.user.id;
      const userInfo = await data.users.getUserInfoById(userID);
      const userExtraInfo = await data.users.getUserExtraInfoById(userID);
      const account = Object.assign(
        userInfo.dataValues, userExtraInfo.dataValues
      );
      context = { account };
    }

    res.render('./home/home', context);
  });

  app.use('/', router);
};

module.exports = {
  init,
};
