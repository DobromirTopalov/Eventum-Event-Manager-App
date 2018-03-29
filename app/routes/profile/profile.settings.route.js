
const {
    Router,
  } = require('express');
const {
    User,
    Artist
} = require('../../../models/data-class')

const passport = require('passport');
const UserController = require('../register/register.controller');

const init = (app, data) => {
    const router = new Router();
    let userController = new UserController(data);
    // let usernameAccount = 'lll'; //will be replace with the loged user data
    
    router
    .get('/settings', async (req, res, next) => {
        let userID = await req.user.id;
        // req.userID = userID;
        console.log(req.user)
        // req.userTest = await data.users.findById(userID);
        req.userInfo = await data.users.getUserInfoById(userID)
        req.userExtraInfo = await data.users.getUserExtraInfoById(userID)
        account = Object.assign(req.userInfo, req.userExtraInfo );
        console.log(account)
        res.render('./profile/settings', {account});
    })
    .post('/settings', async (req, res, next) => {
        const userData = req.body;
        await console.log('dsa')
        // await console.log(userData)
        await console.log(req.user)
        await console.log('dsa')
        let userID = await req.user.id;
        try {
            await userController.updateUser(userID, userData);
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
