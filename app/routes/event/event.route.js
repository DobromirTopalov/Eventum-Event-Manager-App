const {
    Router,
} = require('express');

const path = require('path');
const multer = require('multer');

const EncryptController = require('../../../controllers/EncryptingController');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,
            path.join(__dirname, '..', '..', '..', 'public', 'uploads'));
    },
    filename: async (req, file, cb) => {
        cb(null,
            await EncryptController.imageName(file.originalname + Date.now())
            + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

const EventController = require('./event.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new EventController(data);
    router
        .get('/create', async (req, res, next) => {
            const context = {};

            // if (!req.user) {
            //     return res.redirect('/login');
            // }

            context.countries = await controller.getCountries();
            context.categories = await controller.getCategories();

            return res.render('./event/create', context);
        })
        .post('/create', [upload.any(), async (req, res, next) => {
            let eventData = await req.body;
            // console.log(req);
            if (!req.user) {
                res.redirect('/login');
            }
            const userID = await req.user.id;
            try {
                if (req.files.length === 1) {
                    const hashedFileName = await req.files[0].filename;
                    eventData = await Object.assign(eventData, { 'coverPhoto': hashedFileName });
                    await controller.createEvent(userID, eventData);
                } else {
                    throw new Error('Please upload a cover photo');
                }
            } catch (err) {
                res.status(400).json({ 'err': err.message });
            }
            res.status(200).json({ 'success': true });
        }])
        .get('/:id', async (req, res) => {
            const eventID = req.params.id;

            if (!req.user) {
                return res.redirect('/login');
            }

            const eventInfo = await data
                .events.getEventInfoById(eventID);
            const ticketsOnMarket = await data
                .tickets.getByEventId(eventInfo.id);

            const event = {
                id: eventInfo.id,
                title: eventInfo.title,
                date: eventInfo.date,
                location: eventInfo.Location.address,
                city: eventInfo.Location.City.name,
                coverPhoto: eventInfo.coverPhoto,
                country: eventInfo.Location.City.Country.name,
                authorPhoto: eventInfo.User.UserInfo.avatar,
                description: eventInfo.describe,
                socialFb: 'asd.bg',
                socialTwt: 'asd.com',
                socialGgl: 'asd.net',
                capacity: eventInfo.capacity,
                ticket: {
                    price: ticketsOnMarket.price,
                    capacity: ticketsOnMarket.capacity,
                },
                placename: eventInfo.Location.name,
                category: eventInfo.Category.name,
                subcategories: eventInfo.Subcategory.title,
                hours: '21:30',
            };

            const context = {
                event,
            };

            return res.render('./event/eventPage', context);
        });

    app.use('/event', router);
};

module.exports = {
    init,
};
