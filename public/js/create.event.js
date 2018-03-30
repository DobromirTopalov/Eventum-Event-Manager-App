$(function () {
    /* date picker js */
    $('.dattaPikkara').datepicker({
        autoclose: true
    });

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


    /* Categories - SubCategories */
    var changeOptionSubCategories = function (categories) {
        var $subCategorieInput = $('#subcategorie-input');

        // Clear old data
        $subCategorieInput.empty();

        // Set the new data
        $(`<option value="">Select one</option>`).appendTo($subCategorieInput);
        Object.keys(categories).forEach((categorie) => {
            $(`<option value="${categories[categorie].title}" >${categories[categorie].title}</option>`).appendTo($subCategorieInput);
        });
    }

    $('#categorie-input').change(function () {
        var categorie = $(this).val();

        $.ajax({
            type: "GET",
            url: '/subCategories',
            data: {
                categorie: categorie
            },
            success: function (data) {
                changeOptionSubCategories(data);
            } 
        });
    });
});
