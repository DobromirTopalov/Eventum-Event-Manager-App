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
    getAllUsernames() {
        return  this.Model.findAll({
            attributes: ['username'],
        })
        .then((items) =>  {
            return items.map((item) => item.dataValues['username'])
        })
    }
    getAllEmails() {
        return this.Model.findAll({
            attributes: ['email'],
        })
        .then((items) =>  {
            return items.map((item) => item.dataValues['email'])
        })
    }
     async addNewUser(userObject) {
        try {
            let seqError;
            await this.Model
            .build({ username: userObject.getUsername(),
                 email: userObject.getEmail(),
                 password: userObject.getPassword(),
                 name: userObject.getName(),
                 role: 'User' })
            .save()
            .catch(err => {
                    seqError = err; //sequelize error handling issue with save
                  });
            if(seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error('We are experiencing a problem with your registration. Try again later or contact our teams!')
            }
        } catch (err) {
            throw err;
        }
        
    }
}

module.exports = UsersData;
