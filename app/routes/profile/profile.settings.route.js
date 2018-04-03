const {
    Router,
} = require('express');

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
    const controller = new UserController(data);

    router
        .get('/', async (req, res, next) => {
            if (!req.user) {
                return res.redirect('/login');
            }

            const countries = await controller.getAllCountries();
            const account = req.user;
            account.countries = countries;
            console.log(account);

            return res.render('./profile/settings', { account });
        })
        .post('/', [upload.any(), async (req, res, next) => {
            if (!req.user) {
                return res.redirect('/login');
            }
            const userData = req.body;
            const userID = req.user.id;

            if (Object.keys(userData).length !== 0) {
                try {
                    userData.role = req.user.role;
                    await controller.updateUser(userID, userData);
                } catch (err) {
                    res.status(400).json({ 'err': err.message });
                }

                res.status(200).json({ 'success': true });
            } else {
                const hashedFileName = await req.files[0].filename;

                if (req.files[0].fieldname === 'profilePhoto') {
                    await controller
                        .updateUserProfilePic(userID, hashedFileName);
                    res.end();
                }

                if (req.files[0].fieldname === 'coverPhoto') {
                    await controller
                        .updateUserCoverPic(userID, hashedFileName);
                    res.end();
                }
            }

            return true;
        }]);

    app.use('/settings', router);
};

module.exports = {
    init,
};
