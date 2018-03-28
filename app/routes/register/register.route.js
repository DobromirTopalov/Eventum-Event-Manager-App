const {
  Router,
} = require('express');

const passport = require('passport');

const init = (app, data) => {
    const router = new Router();
    const registerControler = require('./register.controller');

    router
    .get('/register', async (req, res) => {
        const context = {};
        res.render('./register/register', context);
    })
    .get('/register/user', async (req, res) => {
        const context = {};
        res.render('./register/user-register', context);
    })
    .get('/register/artist', async (req, res) => {
        const context = {};
        res.render('./register/artist-register', context);
    })
    .post('/register/user', async (req, res, next) => {
        const username = registerControler.checkData(req.body, data);

        console.log(username);
        // app.post('/login',
        // passport.authenticate('local', {
        //     successRedirect: '/',
        //     failureRedirect: '/login',
        //     failureFlash: false,
        // }));
        // window.alert(username);
        res.send('Hello');
        // res.redirect()
    });
    app.use('/', router);
    };

module.exports = {
  init,
};
