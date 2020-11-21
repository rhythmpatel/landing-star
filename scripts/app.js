try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
} catch (e) {}

// DOM ready
$(function() {

    $('.view-chapters').on('click', function (e) {
        e.preventDefault();
        $('.chapters').addClass('expand');
        $(this).hide();
    })

});
