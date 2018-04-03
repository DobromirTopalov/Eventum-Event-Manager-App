/* eslint-disable */
$(function () {
    /* Country - City */
    var changeOptionCitues = function (cities) {
        var $cityInput = $('#city-input');

        // Clear old data
        $cityInput.empty();

        // Set the new data
        $(`<option value="">Select one</option>`).appendTo($cityInput);
        Object.keys(cities).forEach((city) => {
            $(`<option value="${cities[city].name}" >${cities[city].name}</option>`).appendTo($cityInput);
        });
    }

    $('#country-input').change(function () {
        var country = $(this).val();

        $.ajax({
            type: "GET",
            url: "/cities",
            data: {
                country: country,
            },
            success: function (data) {
                changeOptionCitues(data);
            }
        });
    });
});