const {
    Router,
  } = require('express');

const init = (app, data) => {
    const router = new Router();

    router
    .get('/profile', async (req, res) => {
        // let username = req.params.username;
        if (!req.user) {
          return res.redirect('/login');
        }

        const user = await data.users.getAllInformation(req.user.username);
        console.log('******************');
        console.log(user);
        console.log('@@@@@@@@@@@@@@@@@@@@@@@');
        console.log(user[0].UserInfo);

        const context = {
            username: 'cgfd',
            dateSignup: '24 February 2018',
            coverUrl: 'static/images/users/user-1/cover.jpg',
            profilepicUrl: 'static/images/users/user-2/profilepic.jpg',
            events: 109,
            followers: '2.4M',
            starRating: 8,
        };

        res.render('./profile/user-page', context);
    });

    app.use('/', router);
  };

module.exports = {
  init,
};
