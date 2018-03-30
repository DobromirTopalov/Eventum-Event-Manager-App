/* eslint-disable */
$(document).ready(function(e) {
    /* date picker js */
    $('.dattaPikkara').datepicker({
        autoclose: true
    });

    $('#createEventForm').find('#create-event-button').click(function(e){
        console.log('dib')
        var eventInfo = {
            title: $('input[name=title]').val(),
            date: $('input[name=date]').val(),
            time:  $('input[name=time]').val(),
            country: $('select[name=country]').val(),
            city: $('select[name=city]').val(),
            placeName: $('input[name=placeName]').val(),
            address: $('input[name=address]').val(),
            description: $('textarea[name=author_bio]').val(),
            category: $('select[name=category]').val(),
            subcategory: $('select[name=subcategory]').val(),
            capacity: $('input[name=capacity]').val(), 
            price: $('input[name=price').val(),

        }

        console.log(eventInfo);

        $.ajax({
            method: 'POST',
            async: true,
            url: '/event/create',
            dataType: 'json',
            data: eventInfo,
            error: function (error) {
                $('#alertdiv')
                .html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>' + error.responseJSON["err"] +'</span></div>')
            },
            success: function (data) {
                var messageAlert = 'Good job! You successfully updated your profile!';
                $('#alertdiv')
                .html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>' + messageAlert + '</span></div>')
            }
        });

        return false;

    });
});

/* eslint-enable */