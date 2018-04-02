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
      cb(null,
        path.join(__dirname, '..', '..', '..', 'public', 'uploads'));
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
    .get('/', async (req, res, next) => {
        if (!req.user) {
            return res.redirect('/login');
        }
        const userID = await req.user.id;
        const userInfo = await data.users.getUserInfoById(userID);
        const userExtraInfo = await data.users.getUserExtraInfoById(userID);
        const account = Object.assign(
            userInfo.dataValues, userExtraInfo.dataValues
        );

        res.render('./profile/settings', { account });
    })
    .post('/', [upload.any(), async function(req, res, next) {
        if (!req.user) {
            return res.redirect('/login');
        }
        const userData = await req.body;
        const userID = await req.user.id;
        
        if (Object.keys(userData).length!==0) {
                try {
                    await userController.updateUser(userID, userData);
                } catch (err) {
                    res.status(400).json({ 'err': err.message });
                }
                res.status(200).json({ 'success': true });
        } else {
            const hashedFileName = await req.files[0].filename;
            if (req.files[0].fieldname === 'profilePhoto') {
                await userController
                .updateUserProfilePic(userID, hashedFileName);
                res.end();
            }
            if (req.files[0].fieldname === 'coverPhoto') {
                await userController
                .updateUserCoverPic(userID, hashedFileName);
                res.end();
            }
        }
      }]);

    app.use('/settings', router);
};

module.exports = {
    init,
};
