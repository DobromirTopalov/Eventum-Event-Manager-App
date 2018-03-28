const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();
    router
        .get('/:ID/:TITLE', async (req, res) => {
            const context = {};
            res.render('./event/eventPage', context);
        })
        .get('/create', async (req, res) => {
            const context = {};
            res.render('./event/create', context);
        });

    app.use('/event', router);
};

module.exports = {
    init,
};
