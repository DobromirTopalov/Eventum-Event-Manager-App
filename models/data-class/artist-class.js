const User = require('./user-class');
class Artist extends User {
    constructor(username, email, password, name, city, country, profilePicture, coverPhoto, socialProfileLinkOne, socialProfileLinkTwo, socialProfileLinkThree, jobPosition, website, biography) {
        super(username, email, password, name, city, country, profilePicture, coverPhoto, socialProfileLinkOne, socialProfileLinkTwo, socialProfileLinkThree);
        this.setJobPosition(jobPosition);
        this.setWebsite(website);
        this.setBiography(biography);
    }
    setjobPosition(jobPosition) {
        jobPosition = jobPosition.trim();
        const alphaRegex = /^[a-zA-Z]+$/;
        
        if (!jobPosition.length
            || !jobPosition
        ) {
            return null;
        }
        if (jobPosition.match(alphaRegex)) {
            this.jobPosition = jobPosition;
        }
    }
    setWebsite(website) {
        const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;       
        website = website.trim();

        if (!website.length
            || !website
        ) {
            return null;
        }

        if (website.match(urlRegex)) {
            this.website = website;
        }
    }
    setBiography(biography) {
        biography = biography.trim();

        if (!biography.length
            || !biography
            || (biography.length > 6000)
        ) {
            return null;
        }

        this.biography = biography;
    }

    getjobPosition(jobPosition) {
        return this.jobPosition;
    }
    getWebsite(website) {
        return this.website;
    }
    getBiography(biography) {
        return this.biography;
    }

    getAllInfo() {
        const obj = super.getAllInfo();
        return {
            'username': obj.getUsername(),
            'email': obj.getEmail(),
            'name': obj.getName(),
            'password': obj.getPassword(),
            'country': obj.getCountry(),
            'city': obj.getCity(),
            'profilePicture': obj.getProfilePicture(),
            'coverPicture': obj.getCoverPicture(),
            'socialProfileLinks': obj.getSocialProfileLinks(), 
            'biography': this.getBiography(),
            'jobPosition': this.getjobPosition(),
            'webpage': this.getWebsite(),
        };
    }
}

module.exports = Artist;