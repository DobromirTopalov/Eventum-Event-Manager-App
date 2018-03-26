const User = require('./user-class');
class Artist extends User {
    constructor(username, email, password, name, city, profilePic, coverPic, jobPosition) {
        super(username, email, password, name, city, profilePic, coverPic);
        this.setJobPosition(jobPosition);
    }
    setjobPosition(jobPosition) {
        if (jobPosition.trim().length>0) {
            this.jobPosition = jobPosition;
        }
    }
    getjobPosition(jobPosition) {
        return this.jobPosition;
    }
}

// module.exports = {
//     Artist,
// };