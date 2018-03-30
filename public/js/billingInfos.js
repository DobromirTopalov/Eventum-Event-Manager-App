$(function() {
  $('#confirmOrder').on("click", function() {
    var userInfo = {
        firstname: $('#first_name').val(),
        lastname: $('#last_name').val(),
        email:  $('#email1').val(),
        country: $('#country1').val(),
        city: $('#city').val(),
        address: $('#address1').val(),
        postalCode: $('#zipcode').val(),
    }

    $.ajax({
        method: 'POST',
        async: true,
        url: '/checkout',
        dataType: 'json',
        data: userInfo,
        error: function (error) {
            $('#alertdiv')
            .html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>' + error.responseJSON["err"] +'</span></div>')
        },
        success: function (data) {
            // window.location.href = '/checkout';
        }
    });
    return false;
  })
})
