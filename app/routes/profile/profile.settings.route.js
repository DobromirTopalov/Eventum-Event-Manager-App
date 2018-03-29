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
    let usernameAccount = 'lachi_93'; //will be replace with the loged user data
    let userID = 2;
    router
    .get('/settings', async (req, res) => {
  
        // req.userID = userID;

        req.userTest = await data.users.findById(userID);

        
        // await console.log(req.userTest)
        let account = await req.userTest
        
        res.render('./profile/settings', {account});
    })
    .post('/settings', async (req, res, next) => {
        const userData = req.body;
        await console.log (userData)
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
