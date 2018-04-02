const config = require('../config');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const passport = require('passport');
const {
    Strategy,
} = require('passport-local');

const init = (app, data) => {
    passport.use(new Strategy(async (username, password, done) => {
        const user = await data.users.findByUsername(username);

        if (!user || user.password !== password) {
            return done(null, false, {
                message: 'Incorrect username or password.',
            });
        }

        // User with such username and password exists
        return done(null, user);
    }));

    // User to string
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // string to User
    passport.deserializeUser(async (id, done) => {
        const user = await data.users.findAllById(id);

        if (!user) {
            return done(new Error('Invalid user'));
        }

        return done(null, user);
    });

    app.use(cookieParser());
    app.use(session({ secret: config.secret }));
    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = {
    init,
};
