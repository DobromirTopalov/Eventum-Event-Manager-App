const userObject = require('../../../models/data-class/user-class')
class UserController {
    constructor(data) {
        this.data = data;
    }

    createUser(userData) {
        let thisUser = null;
        try {
            let thisUser = new userObject(userData.username, userData.email, userData.password, userData.name, 
                '', '', '', '', '', '', '', '');

            this.data.createNewUser(thisUser);

        }
        catch (err) {
            throw err;
        }
    }
    // checkExisting

}

module.exports = UserController;
