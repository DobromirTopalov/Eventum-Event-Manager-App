const {
  Router,
} = require('express');

const randomArtist = {
  id: 327418,
  acc: 'artist',
  fullname: 'Mike Tyson',
  username: 'MikyMouse_90',
  email: 'tyson@mail.com',
  passwordMain: 'hitandrun',
  passwordSecondary: 'hitandrun',
  webpage: 'somepage.net',
  country: 'USA',
  authorBio: 'Boxing for life',
  coverPhoto: 'url_1.png',
  coverImg: 'url_2.jpg',
  socialWebFb: '',
  socialWebTwt: 'tyson.twitter.com',
  socialWebGgl: '',
  cat1: 'on',
  sub1cat1: 'on',
  sub2cat1: 'on',
  sub3cat1: '',
  cat2: '',
  sub1cat2: '',
  cat3: 'on',
  cat4: '',
  cat5: '',
  sub1cat5: '',
  mailOnComment: '',
  mailOnApproval: 'on',
  mailOnReview: '',
  mailOnExpire: 'on',
  mailOnUpdates: 'on', 
};

const init = (app, data) => {
  const router = new Router();
  const profileSettingsController = require('./profile.settings.controller');

  router
  .get('/settings', async (req, res) => {
    let account;
    if (req.user) {
      account = profileSettingsController.test(data, req.user);
    }

    account = randomArtist;
    const context = {
      account,
    };

    res.render('./profile/settings', context);
  })
  .post('/settings', async (req, res) => {
    const id = +((req.rawHeaders)[11].split('/').splice(-1, 1));
    const info = req.body;

    const user = {
      name: 'Mike Tyson',
      username: 'MikyMouse_90',
      email: 'tyson@mail.com',
      password: 'h1itan&drunW',
      webpage: 'http://www.somepage.net',
      city: 'slovdiv',
      country: 'UsAd',
      authorBio: 'Boxing for life',
      coverPhoto: 'https://url_1.png',
      coverImg: 'url_2.jpg',
      socialWebFb: '',
      socialWebTwt: 'www.google.com',
      socialWebGgl: '',
    };
    const validateUser = new data(user.username, user.email, user.password, user.name, user.city, user.country, user.coverImg, user.coverPhoto, user.socialWebFb, user.socialWebGgl, user.socialWebTwt);
    console.log(validateUser);
    console.log(user);
    // validate +
    // kum bazat/a
    // const singleUser = await data.users.getById(id);
    // console.log(singleUser.dataValues, singleUser.dataValues.Artists[0].dataValues);

    // const attr = {
    //   username: info.username,
    //   password: info.passwordOne,
    //   email: info.email,
    // await data.users.update(info);
    // console.log(`account id = ${id}`);
    // console.log(info);
    const context = {};
    res.redirect(`/settings/${id}`);
  });

  app.use('/', router);
};

module.exports = {
  init,
};
