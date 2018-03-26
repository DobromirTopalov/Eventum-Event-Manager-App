class User {
    constructor(username, email, password, name, city, profilePic, coverPhoto) {
        this.setUsername(username);
        this.setEmail(email);
        this.profilePicUrl = profilePic;
        this.coverPhotoUrl = coverPhoto;
        this.password = password; 
        this.name = name;
        this.city = city;
    }
    setUsername(username) {
        if(username.trim().length>0){
            this.username = username;
        }
    }
    setEmail(email) {
        if(email.trim().length>0){
            this.email = email;
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
    getProfilePic() {
        return this.profilePicUrl;
    }
    getCoverPic() {
        return this.coverPhotoUrl;
    }
    getCity() {
        return this.city;
    }
    getPassword() {
        return this.password;
    }
    getAll() {
        return {
            'username': this.getUsername(), 
            'email': this.getEmail(),
            'name': this.getName(),
            'password': this.getPassword(),
            'city': this.getCity(),
            'profile_pic': this.getProfilePic(),
            'cover_pic': this.getCoverPic(),
        }
    }
}

module.exports = User