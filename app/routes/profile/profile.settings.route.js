const {
    Router,
  } = require('express');
const {
    User,
    Artist
} = require('../../../models/data-class')

const passport = require('passport');
const UserController = require('../register/register.controller');
const multer = require('multer');

const init = (app, data) => {
    const router = new Router();
    let userController = new UserController(data); 
    let uploading = multer({
        dest: __dirname + '../../uploads/',
      });
    router
    .get('/settings', async (req, res, next) => {
        let userID = await req.user.id;

        req.userInfo = await data.users.getUserInfoById(userID)
        req.userExtraInfo = await data.users.getUserExtraInfoById(userID)
        account = Object.assign(req.userInfo, req.userExtraInfo );

        res.render('./profile/settings', {account});
    })
    .post('/settings', async (req, res, next) => {
        const userData = req.body;

        let userID = await req.user.id;
        try {
            await userController.updateUser(userID, userData);
        } catch (err) {
            let someError = err;
            res.status(400).json({"err": err.message});
        }
        res.status(200).json({"success":true});
    })
    .post('/upload', async (req, res, next) => {
       console.log(req)
    });
    app.use('/', router);
    };

module.exports = {
init,
};
