const {
  Router,
} = require('express');

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

    app.post('/register/artist', function(req, res, next) {
        let username = req.body.username;
        console.log(username);
        // window.alert(username);
    });
    app.use('/', router);
    }

module.exports = {
  init,
};