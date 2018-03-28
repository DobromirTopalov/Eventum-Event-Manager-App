const Data = require('./main.data');

const {
    User,
} = require('../../models/database/models');

class UsersData extends Data {
    constructor() {
        super(User);
    }

    findByUsername(username) {
        return this.Model.findOne({
            where: {
                username,
            },
        });
    }
    getAllUsernames() {
        return this.Model.findAll({
            attributes: ['username'],
        });
    }
    getAllEmails() {
        return this.Model.findAll({
            attributes: ['email'],
        });
    }
}

module.exports = UsersData;
