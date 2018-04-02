const {
    Router,
} = require('express');

const EventController = require('./event.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new EventController(data);

    router
        .get('/:id', async (req, res) => {
            const eventID = req.params.id;

            if (!req.user) {
                return res.redirect('/login');
            }

            const eventInfo = await data.events.getEventInfoById(eventID);
            const subCategoriesInfo = await data.subcategories.getByCategoryId(eventInfo.Category.id);
            const subCatFineInfo = subCategoriesInfo.map((item)=>item.title);
            const ticketsOnMarket = await data.tickets.getByEventId(eventInfo.id);

            const event = {
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
                price: ticketsOnMarket.price,
                capacity: ticketsOnMarket.capacity,
                placename: eventInfo.Location.name,
                category: eventInfo.Category.name,
                subcategories: subCatFineInfo,
                hours: '21:30',

            };
            // console.log(event);

            const context = {
                event,
            };
            res.render('./event/eventPage', context);
        })
        .get('/create', async (req, res, next) => {
            const context = {};

            if (!req.user) {
                return res.redirect('/login');
            }

            context.countries = await controller.getCountries();
            context.categories = await controller.getCategories();

            return res.render('./event/create', context);
        })
        .post('/create', async (req, res, next) => {
            const eventInfo = req.body;

            if (!req.user) {
                return res.redirect('/login');
            }

            const userID = req.user.id;

            try {
                 await controller.createEvent(userID, eventInfo);
             } catch (err) {
                 const someError = err;
                 return res.status(400).json({ 'err': err.message });
             }
             res.status(200).json({ 'success': true });
         });

    app.use('/event', router);
};

module.exports = {
    init,
};
