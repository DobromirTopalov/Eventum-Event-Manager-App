const Data = require('./main.data');

const {
    User,
    UserInfo,
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

    getAllInformation(username) {
        return this.Model.findAll({
            where: {
                username: username,
            }, include: [
                {
                    model: UserInfo,
                },
            ],
        });
    }
}

module.exports = UsersData;
