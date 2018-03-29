$(document).ready(function(e) {
    function checkUsername(username) {
        const usernameRegex = /^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*[a-zA-Z0-9]$/;

        if (!username.length ||
            !username ||
            (username.length < 3) ||
            (username.length > 30)
        ) {
            throw new Error('Username must be between 3 and 30 characters!');
        }

        if (username.match(usernameRegex)) {
            return true;
        }
    }

    function checkEmail(email) {
        email = email.trim();
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!email.length ||
            !email ||
            (email.length > 100)
        ) {
            throw new Error('Email must be in valid email format!');
        }

        if (email.match(emailRegex)) {
            return true;
        }
    }

    function checkName(name) {
        const nameRegex = /^[a-zA-Z ]{1,100}$/;

        if (!name.length ||
            !name ||
            (name.length > 100)
        ) {
            throw new Error('Name must consist of letters only!Max 100 characters allowed!');
        }

        if (name.match(nameRegex)) {
            return true;
        }
    }

    function checkPassword(password) {
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        if (!password.length ||
            !password ||
            (password.length > 32)
        ) {
            throw new Error('Password must have at least one capital letter, symbol, number and should be between 8 and 32 symbols!');
        }

        if (password.match(passwordRegex)) {
            return true;
        }
    }

    function checkAddress(Address) {
        const alphaRegex = /^[a-zA-Z0-9 ]+$/;

        if (!Address.length ||
            !Address ||
            (Address.length > 100)
        ) {
            throw new Error('Address must be between 0 and  100 characters!');
        }
        if (Address.match(alphaRegex)) {
            return true;
        }
    }

    function checkCity(city) {
        const alphaRegex = /^[a-zA-Z ]+$/;
        if (!city.length ||
            !city ||
            (city.length > 100)
        ) {
            throw new Error('Only letters expected!');
        }
        if (city.match(alphaRegex)) {
            return true;
        }
    }

    function checkProfilePicture(profilePicture) {
        const urlRegex = /(ftp|http|https|static):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if (!profilePicture.length ||
            !profilePicture
        ) {
            throw new Error('Invalid url!');
        }


        if (profilePicture.match(urlRegex)) {
            return true;
        }
    }

    function checkCoverPhoto(coverPhoto) {
        const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if (!coverPhoto.length ||
            !coverPhoto
        ) {
            throw new Error('Invalid url!');
        }

        if (coverPhoto.match(urlRegex)) {
            return true;
        }
    }

    function checkSocialProfileLink(socialProfileLink) {
        const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (!socialProfileLink.length ||
            !socialProfileLink
        ) {
            throw new Error('Invalid url!');
        }

        if (socialProfileLink.match(urlRegex)) {
            return true;
        }
    }

    function checkWebsite(website) {
        const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        
        if (!website.length ||
            !website
        ) {
            throw new Error('Invalid url!');
        }

        if (website.match(urlRegex)) {
            return true;
        }
    }

    function checkBiography(biography) {
        if (!biography.length ||
            !biography ||
            (biography.length > 6000)
        ) {
            throw new Error('Text expected!');
        }

        return true;
    }
    
    function validateAllInfo(obj) {
        try {
            checkUsername(obj.$username);
            checkName(obj.$name);
            checkPassword(obj.$password);
            checkEmail(obj.$email);
            checkAddress(obj.$address);
            checkWebsite(obj.$webpage);
            checkCoverPhoto(obj.$coverPhoto);
            checkCoverPhoto(obj.$coverImg);
            checkBiography(obj.$authBio);
            checkSocialProfileLink(obj.$socialProf1);
            checkSocialProfileLink(obj.$socialProf2);
            checkSocialProfileLink(obj.$socialProf3);
        } catch (error) {
            throw error;
        }
        return true;
    }

    $('button').click( function (event) {

        var validObj = {
            name: $('input[name=fullname]').val(),
            username: $('input[name=username]').val(),
            email: $('input[name=email]').val(),
            password: $('input[name=passwordMain]').val(),
            passwordRepeat: $('input[name=passwordSecondary]').val(),
            webpage: $('input[name=website]').val(),
            address: $('input[name=address]').val(),
            coverPhoto: $('input[name=cover_photo]').val(),
            coverImg: $('input[name=dp]').val(),
            autoBio: $('input[name=authbio]').val(),
            // socialProf1: $("#socialOne").val(),
            // socialProf2: $("#socialTwo").val(),
            // socialProf3: $("#socialThree").val(),
        };

        // try {
        //     validateAllInfo(invalidObj)
        // } catch(err) {
        //     $('#alertdiv')
        //     .html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>' + err.message +'</span></div>')
        //     return false;
        // }
         
        console.log(validObj);

        $.ajax({
            method: 'POST',
            async: true,
            url: '/settings',
            dataType: 'json',
            data: validObj,
            error: function (error) {
                $('#alertdiv')
                .html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>' + error.responseJSON["err"] +'</span></div>')
            },
            success: function (data) {
                // window.location.href = '///';
            }
        });
    });
});