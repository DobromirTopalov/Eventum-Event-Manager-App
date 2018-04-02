class User {
    constructor(username = '', email = '',
        password = '', name = '', city = '', country = '',
        profilePicture = '', coverPhoto = '', socialProfileLinkOne = '',
        socialProfileLinkTwo = '', socialProfileLinkThree = '',
        address = '', webpage = '', bio = '') {
        this.setUsername(username);
        this.setEmail(email);
        this.setPassword(password);
        this.setName(name);
        if (city.length > 0) {
            this.setCity(city);
        }
        if (address.length > 0) {
            this.setAddress(address);
        }
        if (country.length > 0) {
            this.setCountry(country);
        }
        if (profilePicture.length > 0) {
            this.setProfilePicture(profilePicture);
        }
        if (coverPhoto.length > 0) {
            this.setCoverPhoto(coverPhoto);
        }
        if (socialProfileLinkOne.length > 0) {
            this.setSocialProfileLink(socialProfileLinkOne);
        }
        if (socialProfileLinkTwo.length > 0) {
            this.setSocialProfileLink(socialProfileLinkTwo);
        }
        if (socialProfileLinkThree.length > 0) {
            this.setSocialProfileLink(socialProfileLinkThree);
        }
        if (webpage.length > 0) {
            this.setWebpage(webpage);
        }
        if (bio.length > 0) {
            this.setBio(bio);
        }
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
            throw new Error('Invalid username length');
        }
        if (username.match(usernameRegex)) {
            this.username = username;
        } else {
            throw new Error('Username includes symbols that are not allowed');
        }
    }

    setEmail(email) {
        email = email.trim();
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!email.length
            || !email
            || (email.length > 100)
        ) {
            throw new Error('Invalid email length');
        }

        if (email.match(emailRegex)) {
            this.email = email;
        } else {
            throw new Error('Email is not of valid format');
        }
    }

    setName(name) {
        name = name.trim();
        const symbolRestrictRegex = /[!$%^&*()+|~=`{}\[\]:";'<>?,.\/]/;
        const nameRegex = /^[a-zA-Z ]{1,100}$/;

        if (!name.length
            || !name
            || (name.length > 100)
        ) {
            console.log(name);
            throw new Error('Invalid name length');
        }

        if (name.match(nameRegex)) {
            this.name = name;
        } else {
            throw new Error('Name includes symbols that are not allowed');
        }
    }

    setPassword(password) {
        const passwordRegex = `^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$`;

        if (!password.length || !password || password.length > 32) {
            throw new Error('Invalid password length');
        }

        this.password = password;

        // if (password.match(passwordRegex)) {
        //     this.password = password;
        // } else {
        //     throw new Error(`Password does not match
        //         all the security requirements`);
        // }
    }

    setCountry(country) {
        country = country.trim();
        const alphaRegex = /^[a-zA-Z]+$/;

        if (!country.length || !country || (country.length > 100)) {
            throw new Error('Country name is not valid');
        }

        if (country.match(alphaRegex)) {
            this.country = country;
        } else {
            throw new Error(`Please include only
                valid symbols in the country name`);
        }
    }

    setAddress(address) {
        address = address.trim();
        const alphaRegex = /^[a-zA-Z]+$/;
        if (!address.length
            || !address
            || (address.length > 100)
        ) {
            throw new Error('Address is too long ');
        }
        if (address.match(alphaRegex)) {
            this.address = address;
        } else {
            throw new Error(`Please include only valid
                symbols in the address name`);
        }
    }

    setCity(city) {
        city = city.trim();
        const alphaRegex = /^[a-zA-Z]+$/;

        if (!city.length || !city || (city.length > 100)) {
            throw new Error('City name is too long');
        }

        if (city.match(alphaRegex)) {
            this.city = city;
        } else {
            throw new Error(`Please include only
                valid symbols in the city name`);
        }
    }

    setProfilePicture(profilePicture) {
        profilePicture = profilePicture.trim();
        const urlRegex = `/(ftp|http|https|static):\/\/
            (\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/`;

        if (!profilePicture.length || !profilePicture) {
            throw new Error('The profile pricture is not correct');
        }

        if (profilePicture.match(urlRegex)) {
            this.profilePicture = profilePicture;
        }
    }

    setCoverPhoto(coverPhoto) {
        coverPhoto = coverPhoto.trim();
        const urlRegex = `/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?
            (\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/`;

        if (!coverPhoto.length
            || !coverPhoto
        ) {
            throw new Error('The cover photo is not correct');
        }

        if (coverPhoto.match(urlRegex)) {
            this.coverPhoto = coverPhoto;
        }
    }
    setSocialProfileLink(socialProfileLink) {
        socialProfileLink = socialProfileLink.trim();

        const urlRegex = `/(ftp|http|https):\/\/(\w+:{0,1}\w*@)
            ?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/`;

        if (!socialProfileLink.length || !socialProfileLink) {
            throw new Error('The link is not correct');
        }

        if (socialProfileLink.match(urlRegex)) {
            this.socialProfileLink = socialProfileLink;
        }
    }

    setWebpage(webpage) {
        webpage = webpage.trim();

        // const urlRegex = `/(ftp|http|https):\/\/(\w+:{0,1}
        //     \w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/`;

        if (!webpage.length || !webpage) {
            throw new Error('Website is a not a valid URL');
        }

        // if (webpage.match(urlRegex)) {
            this.webpage = webpage;
        // } else {
            // throw new Error('Website is a not valid URL');
        // }
    }

    setBio(bio) {
        bio = bio.trim();
        if (!bio.length || !bio || (bio.length > 600)) {
            throw new Error('Bio is too long ');
        } else {
            this.bio = bio;
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
        return this.city || null;
    }
    getCountry() {
        return this.country || null;
    }
    getAddress() {
        return this.address || null;
    }
    getProfilePicture() {
        return this.profilePicture || null;
    }
    getCoverPicture() {
        return this.coverPhoto || null;
    }
    getSocialProfileLinks() {
        return [
            this.socialProfileLinkOne || null,
            this.socialProfileLinkTwo || null,
            this.socialProfileLinkThree || null,
        ];
    }
    getWebpage() {
        return this.webpage || null;
    }
    getBio() {
        return this.bio || null;
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
        };
    }
}

module.exports = User;
