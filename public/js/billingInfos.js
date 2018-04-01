/* eslint-disable */
$(function() {
    function checkEmail(email) {
        const emailRegex = (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
        
        if (!email.length || !email || (email.length > 100)) {
            throw new Error('Invalid email length');
        }
  
        if (email.match(emailRegex)) {
            return true;
        } else {
            throw new Error('Email includes symbols that are not allowed')
        }
    }
  
    function checkFirstName(name) {
        const nameRegex = /^[a-zA-Z ]{1,100}$/;
  
        if (!name.length || !name || (name.length > 100)) {
            throw new Error('Invalid name length');
        }
  
        if (name.match(nameRegex)) {
            return true;
        } else {
            throw new Error('Name includes symbols that are not allowed');
        }
    }
    
    function checkLastName(name) {
      const nameRegex = /^[a-zA-Z ]{1,100}$/;
  
      if (!name.length || !name || (name.length > 100)) {
          throw new Error('Invalid name length');
      }
  
      if (name.match(nameRegex)) {
        return true;
      } else {
          throw new Error('Name includes symbols that are not allowed');
      }
    }
  
    function checkCountry(country) {
        const alphaRegex = /^[a-zA-Z]+$/;
  
        if (!country.length || !country || (country.length > 100)) {
          throw new Error('Country name is not valid')
        }
  
        if (country.match(alphaRegex)) {
            return true;
        } else {
            throw new Error('Please include only valid symbols in the country name');
        }
    }
  
    function checkPostCode(code) {
      const postRegex = /^[a-zA-Z0-9 ]+([-_\.][a-zA-Z0-9 ]+)*[a-zA-Z0-9 ]$/;
  
      if (!code.length || !code || (code.length > 100)) {
        throw new Error('Invalid postcode');
      }
  
      if (code.match(postRegex)) {
          return true;
      } else {
          throw new Error('Please include only valid symbols in the postcode');
      }
    }
  
    function checkCity(city) {
        const alphaRegex = /^[a-zA-Z]+$/;
  
        if (!city.length || !city || (city.length > 100)) {
          throw new Error('City name is not valid')
        }
  
        if (city.match(alphaRegex)) {
            return true;
        } else {
            throw new Error('Please include only valid symbols in the city name')
        }
    }
    
    function checkAddress(address) {
      const alphaRegex = /^[a-zA-Z0-9 ]+([-_\.][a-zA-Z0-9 ]+)*[a-zA-Z0-9 ]$/;
  
      if (!address.length || !address || (address.length > 100)) {
          throw new Error('Address is too long ')
      }
  
      if (address.match(alphaRegex)) {
          return true;
      } else {
          throw new Error('Please include only valid symbols in the address name')
      }
    }

    function validateAllInfo(obj) {
        try {
            checkFirstName(obj.firstname);
            checkLastName(obj.lastname);
            checkEmail(obj.email);
            checkCountry(obj.country);
            checkCity(obj.city);
            checkAddress(obj.address);
            checkPostCode(obj.postalCode);
        } catch (error) {
            throw error;
        }
        return true;
    }

  $('#confirmOrder').on("click", function() {
    $('#messagediv').attr('display','none');
    var userInfo = {
        firstname: $('#first_name').val(),
        lastname: $('#last_name').val(),
        email:  $('#email1').val(),
        country: $('#country1').val(),
        city: $('#city').val(),
        address: $('#address1').val(),
        postalCode: $('#zipcode').val(),
    }
    
    try {
        validateAllInfo(userInfo)
    } catch(err) {
        $('#messagediv')
            .html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">X</a><span>' + err.message +'</span></div>')
        return false;
    }
    
    $.ajax({
        method: 'POST',
        async: true,
        url: '/checkout',
        dataType: 'json',
        data: userInfo,
        error: function (error) {
            $('#messagediv')
                .html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">X</a><span>' + error.responseJSON["err"] +'</span></div>')
        },
        success: function (data) {
            var message = 'You\'ve successfully ordered your tickets!';
            $('#messagediv')
                .html('<div class="alert alert-success"><a class="close" data-dismiss="alert">X</a><span>' + message + '</span></div>')
            // window.location.href = '/checkout';
        }
    });
    return false;
  })
})

/* eslint-enable */

