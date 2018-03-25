// const fs = require('fs');
// const path = require('path');

// const init = (app, data) => {

//     app.get('/', async (req, res) => {
//         const context = {};
//         res.render('./home/home', context);
//     });

//     /** dynamically load all routes */
//     fs.readdirSync(__dirname)
//         .filter((filename) => filename !== path.basename(__filename))
//         .filter((filename) => filename !== 'index.js')
//         // relative to absolute path
//         .map((filename) => path.join(__dirname, filename))
//         .forEach((modulePath) => {
//             const route = require(modulePath);
//             route.init(app, data);
//         });
// };

// module.exports = {
//     init,
// };

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    app.get('/', async (req, res) => {
        const context = {};
        res.render('./home/home', context);
    });

    /** dynamically load all routes */
    const dfsDirectory = (folder, routepath) => {
        fs.readdirSync(routepath)
            .filter((filename) => {
                if (filename.slice(-3) !== '.js') {
                    const filePath = routepath + '\\' + filename;
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
                if (modulePath.slice(-3) === '.js') {
                    const route = require(modulePath);
                    route.init(app, data);
                }
            });
    }
    const folder = __dirname.split('\\');
    const lastSlash = folder.length - 1;
    const fullroute = __dirname;
    
    dfsDirectory(folder[lastSlash], fullroute);
};

module.exports = {
    init,
};
