const {
    Router,
} = require('express');

const UserController = require('../register/register.controller');

const init = (app, data) => {
    const router = new Router();
    const userController = new UserController(data);

    router
        .get('/settings', async (req, res, next) => {
            if (!req.user) {
                return res.redirect('/login');
            }
            const userID = req.user.id;

            const userInfo = await data.users.getUserInfoById(userID);
            const account = userInfo;

            return res.render('./profile/settings', { account });
        })
        .post('/settings', async (req, res, next) => {
            const userData = req.body;

            const userID = await req.user.id;
            try {
                await userController.updateUser(userID, userData);
            } catch (err) {
                res.status(400).json({ 'err': err.message });
            }

            res.status(200).json({ 'success': true });
        })
        .post('/upload', async (req, res, next) => {
            console.log(req);
        });

    app.use('/', router);
};

module.exports = {
    init,
};
