const {
  Router,
} = require('express');
const {
    User,
    Artist
} = require('../../../models/data-class')

const passport = require('passport');
const UserController = require('./register.controller');

const init = (app, data) => {
    const router = new Router();
<<<<<<< HEAD
    let userController = new UserController(data);
=======
    const registerControler = require('./register.controller');
>>>>>>> fdf8da62ef1429674b7cae0eeff8f80d305fd1ba

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
       const userData = req.body;
       try {
            await userController.createUser(userData);
        } catch (err) {
            let someError = err;
            res.status(400).json({"err": err.message});
        }
        res.status(200).json({"success":true});
    })
    .post('/register/artist', async (req, res, next) => {
        const userData = req.body;
        try {
             await userController.createUser(userData);
         } catch (err) {
             let someError = err;
             res.status(400).json({"err": err.message});
         }
         res.status(200).json({"success":true});
     });
    app.use('/', router);
    };

module.exports = {
  init,
};
