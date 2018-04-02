/* eslint-disable */
$(function () {
    var cart = (function () {
        var cartInfo = {
            products: [],
        };

        var updateLocalStorage = function () {
            localStorage.setItem('cart', JSON.stringify(cartInfo));
        }

        if (localStorage.getItem('cart')) {
            cartInfo = JSON.parse(localStorage.getItem('cart'));
        } else {
            updateLocalStorage();
        }

        var addProduct = function (obj) {
            var checkExist = cartInfo.products
                .find(function (item, index) {
                    if (item.eventId === obj.eventId) {
                        cartInfo.products[index].amount += obj.amount;

                        return true;
                    }
                });

            if (!checkExist) {
                cartInfo.products.push(obj);
            }

            updateLocalStorage();
        }

        var getProducts = function () {
            return cartInfo.products;
        }

        var removeItem = function(id){
            cartInfo.products.splice(id, 1);
            updateLocalStorage();
        }

        var clear = function () {
            cartInfo = {
                products: [],
            };

            updateLocalStorage();
        }

        return {
            addProduct: addProduct,
            getProducts: getProducts,
            removeItem: removeItem,
            clear: clear
        }
    })();

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

    function checkAmount(amount) {
        const amountRegex = /^[0-9]{1,2}$/;

        if (!amount.length || !amount || (amount.length > 2)) {
            throw new Error('Up to 99 tickets allowed on single purchase!You cannot buy 0 tickets!');
        }

        if (amount.match(amountRegex)) {
            return true;
        } else {
            throw new Error('Please specify a number for amount field');
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

    const allPurchasedItems = cart.getProducts();
    var totalprice = 0;

    var emptycart = $("<Li>").addClass("total_ammount").attr("id", "empty-cart").append($("<p>").html("Your cart is empty!"));
    $("#list-tickets").append(emptycart);

    // start of summary
    for (var i = 0; i < allPurchasedItems.length; i += 1) {
        $("#empty-cart-one").remove();
        $("#empty-cart").remove();
        var item = allPurchasedItems[i];

        var a = $("<a>").attr("href", "/event/" + item.eventId)
            .html("" + item.eventTitle + '<br>x' + item.amount);
        var span = $("<span>").html("$" + item.price);
        var li = $("<li>").addClass("item").append(a).append(span);
        $("#list-tickets").append(li);

        totalprice += item.price * item.amount;
    }

    var p = $("<p>").html("Total");
    var span2 = $("<span>").html("$" + totalprice);
    var li2 = $("<li>").addClass("total_ammount").append(p).append(span2);
    $("#list-tickets").append(li2);

    // end of summary
    // start of cart

    var p_total = $("<p>");
    var span_total = $("<span>").html("Total:    $" + totalprice);
    p_total.append(span_total);
    var div_total = $("<div>").addClass("total").append(p_total);
    $("#cart-space").prepend(div_total);

    /* => HEADER */
    for (var i = 0; i < allPurchasedItems.length; i += 1) {
        var item = allPurchasedItems[i];

        var a_info = $("<a>").addClass("title")
            .attr("href", "/event/" + item.eventId)
            .html("" + item.eventTitle + '<br>x' + item.amount);
        var div_info = $("<div>").addClass("info").append(a_info);
        var img_info = $("<img>").attr("src", "/static/images/capro1.jpg").attr("width", "100px").attr("height", "70px");
        var div_info2 = $("<div>").addClass("thumbn").append(img_info);
        var div_productInfo = $("<div>").addClass("product__info").append(div_info2).append(div_info);

        var span_cart = $("<span>").addClass("lnr lnr-trash cart-delete-item").attr('data-item', i);
        var p_cart = $("<p>").html("$" + item.price);
        var a_cart = $("<a>").attr("href", "").append(span_cart);
        var div_cart = $("<div>").addClass("product__action").append(a_cart).append(p_cart);

        var productFinal = $("<div>").addClass("cart_product").append(div_productInfo).append(div_cart);

        $("#cart-space").prepend(productFinal);
    }
    // end of cart

    $('#buy').on("click", function () {
        var $theEvent = $(this).data('event');
        var $ticketsAmount = +($('#amount-ticket-input').val());
        var $ticketAmountDb = +($('#tickets-amount').text());

        // Check weather you want buy more then we have
        if ($ticketsAmount > $ticketAmountDb) {
            $('.purchase-button p.text-error').text('Currently, we don\'t have that many tickets available!');

            return false;
        }

        // Check wather the amount is <= 0
        if ($ticketsAmount <= 0) {
            $('.purchase-button p.text-error').text('You need to get minimum one ticket!');

            return false;
        }

        // Check weather the amount is number
        if (isNaN($ticketsAmount))  {
            $('.purchase-button p.text-error').text('You do not use correct characters');

            return false;
        }

        // Data for Ajax
        var eventInfo = {
            EventId: $theEvent,
            amount: $ticketsAmount,
        };

        $.ajax({
            method: 'GET',
            async: true,
            url: '/event/checkTicketsAmount',
            dataType: 'json',
            data: eventInfo,
            error: function (error) {
                $('#messagediv')
                    .html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">X</a><span>' + error.responseJSON["err"] + '</span></div>')
            },
            success: function (data) {
                var message = 'You\'ve successfully ordered your tickets!';
                $('#messagediv')
                    .html('<div class="alert alert-success"><a class="close" data-dismiss="alert">X</a><span>' + message + '</span></div>')

                //update localstorage
                var infoForTicketProduct = {
                    eventTitle: data.infoEvent.title,
                    description: data.infoEvent.describe,
                    price: data.infoTicket.price,
                    amount: +(data.amount),
                    eventId: data.infoTicket.EventId,
                    eventUrl: '/event/' + data.infoTicket.EventId + '/' + data.infoEvent.title,
                };
                cart.addProduct(infoForTicketProduct);

                window.location.href = '/checkout';
            }
        });

        return false;
    });

    $('#confirmOrder').on("click", function () {
        for (var i = 0; i < allPurchasedItems.length; i += 1) {
            var item = allPurchasedItems[i];

            $('#messagediv').attr('display', 'none');
            var userInfo = {
                firstname: $('#first_name').val(),
                lastname: $('#last_name').val(),
                email: $('#email1').val(),
                country: $('#country1').val(),
                city: $('#city').val(),
                address: $('#address1').val(),
                postalCode: $('#zipcode').val(),
                order: item,
            }

            try {
                validateAllInfo(userInfo);
                if (!allPurchasedItems.length) {
                    throw new Error('Cart is empty!');
                }
            } catch (err) {
                $('#messagediv')
                    .html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">X</a><span>' + err.message + '</span></div>')
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
                        .append('<div class="alert alert-danger"><a class="close" data-dismiss="alert">X</a><span>' + error.responseJSON["err"] + 'for purchase: ' + JSON.stringify(error.data).infoEvent.title + '</span></div>')
                },
                success: function (data) {
                    var message = 'You\'ve successfully ordered your ticket for: ' + data.infoEvent.title;
                    $('#messagediv')
                        .append('<div class="alert alert-success"><a class="close" data-dismiss="alert">X</a><span>' + message + '</span></div>')
                    // window.location.href = '/checkout';
                    cart.clear();
                }
            });
        }
    })

    $('.cart-delete-item').on('click', function() {
        debugger;
        var theItem = $(this).data('item');
        cart.removeItem(theItem);
    });
})
