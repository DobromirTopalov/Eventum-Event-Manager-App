const {
  Router,
} = require('express');

const SearchController = require('./search.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new SearchController(data);
    router
    .get('/', async (req, res) => {
        const queryData = req.query;
        const eventsAll = await controller
            .eventQuery(queryData.keywords,
                queryData.city, queryData.country, queryData.category);

        const categories = await controller.getAllCategories();
        const countries = await controller.getAllCountries();

        const events = {
            ...eventsAll,
        };

        const context = {
            categories,
            countries,
            events,
        };

        res.render('./search/search', context);
    });

    app.use('/search', router);
};

module.exports = {
  init,
};
