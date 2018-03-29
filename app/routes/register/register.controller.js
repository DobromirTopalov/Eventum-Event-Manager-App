const userObject = require('../../../models/data-class/user-class');

class UserController {
    constructor(data) {
        this.data = data;
    }
    async createUser(userData) {
        let thisUser = null;
        try {
            if(userData.password !== userData.passwordRepeat) {
                throw new Error('The two passwords do not match');
            }
            thisUser = await new userObject(userData.username, userData.email, userData.password, userData.name, 
                '', '', '', '', '', '', '', '');
            let usernamesArray = await this.data.users.getAllUsernames();
            if(usernamesArray.includes(thisUser.getUsername())) {
                throw new Error('Existing username');
            }
            let emailsArray = await this.data.users.getAllEmails();
            if(emailsArray.includes(thisUser.getEmail())) {
                throw new Error('This email is already taken');
            }
            await this.data.users.addNewUser(thisUser);
        }
        catch (err) {
            throw err;
        }
    }
    async updateUser(userID, userData) {
        let thisUser = null;
        try {
            if(userData.password !== userData.passwordRepeat) {
                throw new Error('The two passwords do not match');
            }
            await console.log(userData)
            thisUser = await new userObject(userData.username, userData.email, userData.password, userData.name, 
                'userDatacity', 'userDatacountry', userData.profilePic, userData.coverPhoto, '', '' , '', '', userData.webpage, userData.autoBio)
            let usernamesArray = await this.data.users.getAllUsernames();
            console.log("DSADA")
            await console.log(thisUser)
            console.log("123321")
            await console.log(userData)
            console.log("DSADA")

            // if(usernamesArray.includes(thisUser.getUsername())) {
            //     throw new Error('Existing username');
            // }
            // let emailsArray = await this.data.users.getAllEmails();
            // if(emailsArray.includes(thisUser.getEmail())) {
            //     throw new Error('This email is already registered');
            // }
            // await this.data.users.updateUserData(userID, thisUser);
            await this.data.users.updateUserData(userID, thisUser);
            await this.data.users.updateUserInfo(userID, thisUser);
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = UserController;
