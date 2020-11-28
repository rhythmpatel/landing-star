try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap/js/src/util');
    require('bootstrap/js/src/button');
    require('bootstrap/js/src/collapse');
    require('slick-carousel');
} catch (e) {}

// DOM ready
$(function() {

    // view all chapters
    $('.view-chapters').on('click', function (e) {
        e.preventDefault();
        $('.chapters').addClass('expand');
        $(this).hide();
    });

    // testimonial slider
    $('.testimonials').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

});
