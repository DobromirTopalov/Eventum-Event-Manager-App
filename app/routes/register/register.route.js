const {
  Router,
} = require('express');

const passport = require('passport');

const init = (app, data) => { 
    const router = new Router();

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
        let username = req.body.username;
        let email= req.body.email;
        let password = req.body.password;
        let passwordRepeat = req.body.paswordRepeat;
        let name = req.body.urname;
        console.log(username);
        // app.post('/login',
        // passport.authenticate('local', {
        //     successRedirect: '/',
        //     failureRedirect: '/login',
        //     failureFlash: false,
        // }));
        // window.alert(username);
        res.send('Hello, ' + name + username + password + passwordRepeat + name)
        // res.redirect()
    });
    app.use('/', router);
    }

module.exports = {
  init,
};