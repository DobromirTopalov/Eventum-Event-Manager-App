
const {
    Router,
  } = require('express');
// const {
//     User,
//     Artist,
// } = require('../../../models/data-class');

const path = require('path');
const multer = require('multer');

const UserController = require('../register/register.controller');
const EncryptController = require('../../../controllers/EncryptingController');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(path.resolve(), '..', '..', '..', 'public', 'uploads'));
    },
    filename: async function(req, file, cb) {
        cb(null,
            await EncryptController.imageName(file.originalname + Date.now())
            + path.extname(file.originalname));
    },
  });

const upload = multer({ storage: storage });

const init = (app, data) => {
    const router = new Router();
    const userController = new UserController(data);
    router
    .get('/settings', async (req, res, next) => {
        // if (!req.user) {
        //     return res.redirect('/login');
        //   }
        // let userID = await req.user.id;
        const userID = 3;

        req.userInfo = await data.users.getUserInfoById(userID);
        req.userExtraInfo = await data.users.getUserExtraInfoById(userID);
        const account = Object.assign(req.userInfo, req.userExtraInfo );

        res.render('./profile/settings', { account });
    })

    .post('/settings', [upload.any(), async function(req, res, next) {
        const userData = await req.body;
        console.log(userData);
        //  if (!req.user) {
        //     return res.redirect('/login');
        //   }
        // let userID = await req.user.id;

        if (Object.keys(userData).length!==0) {
            const userID = 2;
            //     let userID = await req.user.id;
                try {
                    await userController.updateUser(userID, userData);
                } catch (err) {
                    // let someError = err;
                    res.status(400).json({ 'err': err.message });
                }
                res.status(200).json({ 'success': true });
        } else {
            const file = await req.files.file;
            await console.log(await file);
            res.end();
        }
      }]);
    app.use('/', router);
};

module.exports = {
    init,
};
