const {
    Router,
} = require('express');

const path = require('path');
const multer = require('multer');

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

const EventController = require('./event.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new EventController(data);
    router
        .get('/:ID/:TITLE', async (req, res) => {
            const context = {};
            res.render('./event/eventPage', context);
        })
        .get('/create', async (req, res, next) => {
            const context = {};

            // if (!req.user) {
            //     return res.redirect('/login');
            // }

            context.countries = await controller.getCountries();
            context.categories = await controller.getCategories();

            res.render('./event/create', context);
        })
        .post('/create', [upload.any(), async function(req, res, next) {
            let eventData = await req.body;
            // console.log(req);
             if (!req.user) {
                 res.redirect('/login');
              }
            const userID = await req.user.id;
            try {
                if (req.files.length === 1) {
                    const hashedFileName = await req.files[0].filename;
                    eventData = await Object.assign(eventData, { 'coverPhoto': hashedFileName } );
                    await controller.createEvent(userID, eventData);
                } else {
                    throw new Error('Please upload a cover photo');
                }
            } catch (err) {
                res.status(400).json({ 'err': err.message });
            }
            res.status(200).json({ 'success': true });
          }])
         .get('/overview', async (req, res, next) => {
            let eventId = 34;
            let event = Object.assign(await data.events.getEventInfoById(eventId), {category: 'Music',
            subcategories: ['Modern', 'Techno', 'Trap']} );
            // let userExtraInfo = await data.users.getUserExtraInfoById(userID)
            // eventInfo = Object.assign(userInfo, userExtraInfo );
            // const context = {};
            // context.countries =['Bulgaria'];
            // const event = {
            // title: 'Soundwave - experience the best audio!',
            // date: 'November, 27 2018',
            // location: 'NDK',
            // city: 'Sofia',
            // country: 'Bulgaria',
            // authorPhoto: 'photo.com',
            // description: 'Ultra new, bleeding edge sound equipment and a lot of music, drink and fun!',
            // socialFb: 'asd.bg',
            // socialTwt: 'asd.com',
            // socialGgl: 'asd.net',
            // price: '15.99',
            // capacity: '120',
            // placename: 'Sofia Live Club',
            // category: 'Music',
            // subcategories: ['Modern', 'Techno', 'Trap'],
            // hours: '21:30',
            // }
            const comments = [{
                            img: 'photo.com',
                            owner: 'Ivan Ivanov',
                            date: '23.12.16 23:45',
                            content: 'Fantastic show!',
                        },
                        {
                            img: 'photos.com',
                            owner: 'Mitko Mitev',
                            date: '02.08.16 02:45',
                            content: 'Awesome!',
                        },
                    ];
        
            const context = await {
                event,
                comments,
            };
        
            res.render('./event/event-overview', context);
        })
        // // .get('/overview', async (req, res) => {
        // //     const event = {
        // //         title: 'Soundwave - experience the best audio!',
        //         date: 'November, 27 2018',
        //         location: 'NDK',
        //         city: 'Sofia',
        //         country: 'Bulgaria',
        //         authorPhoto: 'photo.com',
        //         description: 'Ultra new, bleeding edge sound equipment and a lot of music, drink and fun!',
        //         socialFb: 'asd.bg',
        //         socialTwt: 'asd.com',
        //         socialGgl: 'asd.net',
        //         price: '15.99',
        //         capacity: '120',
        //         placename: 'Sofia Live Club',
        //         category: 'Music',
        //         subcategories: ['Modern', 'Techno', 'Trap'],
        //         hours: '21:30',

        //     };

        //     const comments = [{
        //             img: 'photo.com',
        //             owner: 'Ivan Ivanov',
        //             date: '23.12.16 23:45',
        //             content: 'Fantastic show!',
        //         },
        //         {
        //             img: 'photos.com',
        //             owner: 'Mitko Mitev',
        //             date: '02.08.16 02:45',
        //             content: 'Awesome!',
        //         },
        //     ];

        //     const context = {
        //         event,
        //         comments,
        //     };
        //     res.render('./event/event-overview', context);
        // });

    app.use('/event', router);
};

module.exports = {
    init,
};
