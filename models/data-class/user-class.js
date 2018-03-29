class User {
    constructor(username = '', email = '', 
    password ='', name ='' , city = '', country = '',
    profilePicture = '', coverPhoto = '', socialProfileLinkOne = '',
    socialProfileLinkTwo = '', socialProfileLinkThree = '') {
            this.setUsername(username);
            this.setEmail(email);
            this.setPassword(password);
            this.setName(name);
            this.setCity(city);
            this.setCountry(country);
            this.setProfilePicture(profilePicture);
            this.setCoverPhoto(coverPhoto);
            this.setSocialProfileLink(socialProfileLinkOne);
            this.setSocialProfileLink(socialProfileLinkTwo);
            this.setSocialProfileLink(socialProfileLinkThree);
    }
    setUsername(username) {

        const usernameRegex = /^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*[a-zA-Z0-9]$/;
        const symbolRestrictRegex = /[!$%^&*()+|~=`{}\[\]:";'<>?,.\/]/;
        username = username.trim();

        if (!username.length
            || !username
            || (username.length <= 3)
            || (username.length > 30)
            // || (username.match(symbolRestrictRegex))
        ) {
            throw new Error('Invalid username length')
        }      
        if (username.match(usernameRegex)) {
            this.username = username;
        } else {
            throw new Error('Username includes symbols that are not allowed')
        }
    }
    setEmail(email) {
        email = email.trim();
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if (!email.length
            || !email
            || (email.length > 100)
        ) {
            throw new Error('Invalid email length')
        }

        if (email.match(emailRegex)) {
            this.email = email;
        } else {
            throw new Error('Email includes symbols that are not allowed')
        }
    }
    setName(name) {
        name = name.trim();
        const symbolRestrictRegex = /[!$%^&*()+|~=`{}\[\]:";'<>?,.\/]/;
        const nameRegex = /^[a-zA-Z ]{1,100}$/;
    
        if (!name.length
            || !name
            || (name.length > 100)
        ) { console.log(name)
            throw new Error('Invalid name length')
        }

        if (name.match(nameRegex)) {
            this.name = name;
        } else {
            throw new Error('Name includes symbols that are not allowed')
        }
    }
    setPassword(password) {
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (!password.length
            || !password
            || password.length<8
            || (password.length > 32)
        ) {
            throw new Error('Invalid password length')
        }

        if (password.match(passwordRegex)) {
            this.password = password;
        } else {
            throw new Error('Password does not match all the security requirements')
        }
    }
    setCountry(country) {
        country = country.trim();
        const alphaRegex = /^[a-zA-Z]+$/;
        
        if (!country.length
            || !country
            || (country.length > 100)
        ) {
            return null;
        }
        if (country.match(alphaRegex)) {
            this.country = country;
        }
    }
    setCity(city) {
        city = city.trim();
        const alphaRegex = /^[a-zA-Z]+$/;
        if (!city.length
            || !city
            || (city.length > 100)
        ) {
            return null;
        }
        if (city.match(alphaRegex)) {
            this.city = city;
        }
    }
    setProfilePicture(profilePicture) {
        profilePicture = profilePicture.trim();
        const urlRegex = /(ftp|http|https|static):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if (!profilePicture.length
            || !profilePicture
        ) {
            return null;
        }

        
        if (profilePicture.match(urlRegex)) {
            this.profilePicture = profilePicture;
        }
    }
    setCoverPhoto(coverPhoto) {
        coverPhoto = coverPhoto.trim();
        const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if (!coverPhoto.length
            || !coverPhoto
        ) {
            return null;
        }

        if (coverPhoto.match(urlRegex)) {
            this.coverPhoto = coverPhoto;
        }
    }
    setSocialProfileLink(socialProfileLink) {
        socialProfileLink = socialProfileLink.trim();

        const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if (!socialProfileLink.length
                || !socialProfileLink
            ) {
                return null;
            }
    
            if (socialProfileLink.match(urlRegex)) {
                this.socialProfileLink = socialProfileLink;
            }
    }


    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    getPassword() {
        return this.password;
    }
    getCity() {
        return this.city;
    }
    getCountry() {
        return this.country;
    }
    getProfilePicture() {
        return this.profilePicture;
    }
    getCoverPicture() {
        return this.coverPhoto;
    }
    getSocialProfileLinks() {
        return [
            this.socialProfileLinkOne,
            this.socialProfileLinkTwo,
            this.socialProfileLinkThree,
        ];
    }
    getAllInfo() {
        return {
            'username': this.getUsername(), 
            'email': this.getEmail(),
            'name': this.getName(),
            'password': this.getPassword(),
            'country': this.getCountry(),
            'city': this.getCity(),
            'profilePicture': this.getProfilePicture(),
            'coverPicture': this.getCoverPicture(),
            'socialProfileLinks': this.getSocialProfileLinks(),
        }
    }
}

module.exports = User