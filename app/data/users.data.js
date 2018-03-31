const Data = require('./main.data');

const {
    User,
    UserInfo,
} = require('../../models/database/models');

class UsersData extends Data {
    constructor() {
        super(User);
    }

    findById(id) {
        const result = this.Model.findOne({
            where: {
                id: id,
            },
        });

        return result;
    }

    findByUsername(username) {
        const result = this.Model.findOne({
            where: {
                username: username,
            },
        });

        return result;
    }

    findByEmail(email) {
        const result = this.Model.findOne({
            where: {
                email: email,
            },
        });

        return result;
    }

    getUserInfoById(id) {
        const result = this.Model.findOne({
            where: {
                id: id,
            },
        });

        return result;
    }

    getUserExtraInfoById(id) {
        const result = UserInfo.findOne({
            where: {
                id: id,
            },
        });

        return result;
    }

    async addNewUser(userObject) {
        try {
            let seqError;
            await this.Model
                .build({
                    username: userObject.getUsername(),
                    email: userObject.getEmail(),
                    password: userObject.getPassword(),
                    name: userObject.getName(),
                    role: 'User',
                })
                .save()
                .catch(err => {
                    seqError = err; //sequelize error handling issue with save
                });
            let userId = await this.findByUsername(userObject.getUsername()).then(async (item) => await item.id);
            await this.addUserInfo(userId, userObject);
            await this.Model
                .update(
                    { UserInfoId: userId },
                    { where: { id: userId } }
                )
                .catch(err => {
                    seqError = err; //sequelize error handling issue with save
                });

            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error(`We are experiencing a problem with
                    your registration. Try again later or contact our teams!`);
            }
        } catch (err) {
            throw err;
        }
    }
    async updateUserData(id, userObject) {
        try {
            let seqError;
            await this.Model
                .update(
                    {
                        username: userObject.getUsername(),
                        email: userObject.getEmail(),
                        password: userObject.getPassword(),
                        name: userObject.getName(),
                        role: 'User',
                        UserInfoId: id
                    },
                    { where: { id: id } }
                )
                .catch(err => {
                    seqError = err; //sequelize error handling issue with save
                });
            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error('We are experiencing a problem with your registration. Try again later or contact our teams!')
            }
        } catch (err) {
            throw err;
        }
    }
    async addUserInfo(id, userInfo) {
        try {
            let seqError;
            await UserInfo
                .build({
                    id: id,
                    address: '',
                    avatar: '',
                    coverPhoto: '',
                    website: '',
                    biography: '',
                })
                .save()
                .catch(err => {
                    seqError = err; //sequelize error handling issue with save
                });
            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error('We are experiencing a problem with your registration. Try again later or contact our teams!')
            }
        } catch (err) {
            throw err;
        }
    }
    async updateUserInfo(id, userObject) {
        try {
            let seqError;
            await UserInfo
                .update(
                    {
                        address: userObject.getAddress(),
                        avatar: userObject.getProfilePicture(),
                        coverPhoto: userObject.getCoverPicture(),
                        website: userObject.getWebpage(),
                        biography: userObject.getBio(),
                    },
                    { where: { id: id } }
                )
                .catch(err => {
                    seqError = err; //sequelize error handling issue with save
                });
            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error('We are experiencing a problem with your registration. Try again later or contact our teams!')
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UsersData;
