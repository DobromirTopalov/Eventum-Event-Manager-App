<<<<<<< HEAD
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
=======
module.exports = {
    checkData: (body) => {
        const username = body.username;
        const email = body.email;
        const password = body.password;
        const passwordRepeat = body.paswordRepeat;
        const name = body.urname;

        return {};
    },
};
>>>>>>> fdf8da62ef1429674b7cae0eeff8f80d305fd1ba
