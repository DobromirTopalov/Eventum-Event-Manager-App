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
            console.log(emailsArray)
            if(emailsArray.includes(thisUser.getEmail())) {
                throw new Error('This email is already taken');
            }
            await this.data.users.addNewUser(thisUser);
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = UserController;
