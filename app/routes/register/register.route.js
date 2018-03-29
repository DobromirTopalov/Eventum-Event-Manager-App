const {
  Router,
} = require('express');
const {
    User,
    Artist,
} = require('../../../models/data-class');

const passport = require('passport');
const UserController = require('./register.controller');

const init = (app, data) => {
    const router = new Router();
    let userController = new UserController(data);

    router
    .get('/', async (req, res) => {
        const context = {};
        res.render('./register/register', context);
    })
    .get('/user', async (req, res) => {
        const context = {};
        res.render('./register/user-register', context);
    })
    .get('/artist', async (req, res) => {
        const context = {};
        res.render('./register/artist-register', context);
    })
    .post('/user', async (req, res, next) => {
       const userData = req.body;
       try {
            await userController.createUser(userData);
        } catch (err) {
            const someError = err;
            res.status(400).json({ 'err': err.message });
        }
        res.status(200).json({ 'success': true });
    })
    .post('/artist', async (req, res, next) => {
        const userData = req.body;
        try {
             await userController.createUser(userData);
         } catch (err) {
             const someError = err;
             res.status(400).json({ 'err': err.message });
         }
         res.status(200).json({ 'success': true });
     });
    app.use('/register', router);
    };

module.exports = {
  init,
};
