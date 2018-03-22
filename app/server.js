const express = require('express');

// const data = require('./data');
const data = [];

const config = require('./config');

const app = express();

require('./config/express').init(app);

/*
    From Doch's demo

    app.use((req, res, next) => {
        res.locals.user = req.user || null;
        return next();
    });
*/
// app.get('/', (req, res) => {
//     res.send(, 'By);
// })

require('./routes').init(app, data);

app.listen(config.port);
