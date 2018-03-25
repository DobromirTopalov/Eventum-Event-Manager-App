const fs = require('fs');
const path = require('path');

const init = (app, data) => {

    app.get('/', async (req, res) => {
        const context = {};
        res.render('./home/home', context);
    });
    /** dynamically load all routes */
    fs.readdirSync(__dirname)
        .filter((filename) => filename !== path.basename(__filename))
        .filter((filename) => filename !== 'index.js')
        // relative to absolute path
        .map((filename) => path.join(__dirname, filename))
        .forEach((modulePath) => {
            const route = require(modulePath);
            route.init(app, data);
        });
};

module.exports = {
    init,
};
