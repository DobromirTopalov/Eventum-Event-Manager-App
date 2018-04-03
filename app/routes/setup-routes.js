const fs = require('fs');
const path = require('path');

const HomeController = require('./home/home.controller');

const init = (app, data) => {
    const controller = new HomeController(data);

    app.get('/', async (req, res) => {
        const categories = await controller.getAllCategories();
        const countries = await controller.getAllCountries();

        const context = {
            categories,
            countries,
        };

        res.render('./home/home', context );
    });

    /* dynamically load all routes */
    const dfsDirectory = (folder, routepath) => {
        fs.readdirSync(routepath)
            .filter((filename) => {
                if (filename.slice(-3) !== '.js') {
                    const filePath = routepath + '/' + filename;
                    dfsDirectory(filename, filePath);
                }
                if (filename !== path.basename(__filename)) {
                    return filename;
                }
            })
            .filter((filename) => filename !== 'index.js')
            // relative to absolute path
            .map((filename) => path.join(routepath, filename))
            .forEach((modulePath) => {
                if (modulePath.slice(-8) === 'route.js') {
                    const route = require(modulePath);
                    route.init(app, data);
                }
            });
    };

    const folder = __dirname.split('/');
    const lastSlash = folder.length - 1;
    const fullroute = __dirname;

    dfsDirectory(folder[lastSlash], fullroute);
};

module.exports = {
    init,
};
