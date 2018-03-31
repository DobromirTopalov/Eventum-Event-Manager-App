const {
    Router,
  } = require('express');

const init = (app, data) => {
    const router = new Router();

    router
    .get('/profile', async (req, res) => {
        if (!req.user) {
          return res.redirect('/login');
        }

        const userID = req.user.id;
        const userInfo = await data.users.getUserInfoById(userID);
        const userExtraInfo = await data.users.getUserExtraInfoById(userID);
        const account = Object.assign(userInfo, userExtraInfo );
        // console.log(account);
        // const context = {
        //     username: 'cgfd',
        //     dateSignup: '24 February 2018',
        //     coverUrl: 'static/images/users/user-1/cover.jpg',
        //     profilepicUrl: 'static/images/users/user-2/profilepic.jpg',
        //     events: 109,
        //     followers: '2.4M',
        //     starRating: 8,
        // };
        // console.log(account.createdAt)
        return res.render('./profile/user-page', account);
    });

    app.use('/', router);
  };

module.exports = {
  init,
};
