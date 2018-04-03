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

    findAllById(id) {
        const result = this.Model.findOne({
            where: {
                id: id,
            },
            include: {
                model: UserInfo,
            },
        });

        return result;
    }

    findByUsername(username) {
        const result = this.Model.findOne({
            where: {
                username: username,
            },
            include: {
                model: UserInfo,
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
            include: {
                model: UserInfo,
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

    addNewUser(userObject) {
        const result = this.Model.create({
            username: userObject.username,
            email: userObject.email,
            password: userObject.password,
            name: userObject.name,
            role: 'User',
        });

        return result;
    }

    addUserInfo(userId) {
        const result = UserInfo.create({
            address: '',
            avatar: 'usr_avatar.png',
            coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
            website: '',
            biography: '',
        });

        return result;
    }

    updateUserDataToInfo(userId, Infoid) {
        const result = this.Model.update(
            { UserInfoId: Infoid },
            { where: { id: userId } }
        );

        return result;
    }

    updateUserData(id, userObject) {
        try {
            let seqError;
            this.Model.update(
                {
                    username: userObject.getUsername(),
                    email: userObject.getEmail(),
                    password: userObject.getPassword(),
                    name: userObject.getName(),
                    role: userObject.getRole(),
                    UserInfoId: id,
                },
                { where: { id: id } }
            ).catch((err) => {
                seqError = err;
            });
            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error(`We are experiencing a problem with
                    your registration. Try again later or contact our teams!`);
            }
        } catch (err) {
            throw err;
        }
    }

    updateUserInfo(id, userObject) {
        try {
            let seqError;
            UserInfo.update(
                {
                    address: userObject.getAddress(),
                    website: userObject.getWebpage(),
                    biography: userObject.getBio(),
                },
                { where: { id: id } }
            ).catch((err) => {
                    seqError = err;
            });
            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error(`We are experiencing a problem
                    with your registration.
                    Try again later or contact our teams!`);
            }
        } catch (err) {
            throw err;
        }
    }

    updateUserProfilePic(id, userProfilePic) {
        console.log(id, userProfilePic);
        try {
            let seqError;
            UserInfo.update(
                {
                    avatar: userProfilePic,
                },
                { where: { id: id } }
            ).catch((err) => {
                    seqError = err;
            });
            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error(
                    `There is a problem updating your profile picture. 
                    Please try again later`
                );
            }
        } catch (err) {
            throw err;
        }
    }

    updateUserCoverPic(id, userCoverPic) {
        try {
            let seqError;
            UserInfo.update(
                {
                    coverPhoto: userCoverPic,
                },
                { where: { id: id } }
            ).catch((err) => {
                    seqError = err;
            });
            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error(
                    `There is a problem updating your cover photo. 
                    Please try again later.`
                );
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UsersData;
