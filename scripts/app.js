try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap/js/src/util');
    require('bootstrap/js/src/button');
    require('bootstrap/js/src/collapse');
    require('bootstrap/js/src/scrollspy');
    require('slick-carousel');
} catch (e) {}

// Collapse Navbar
const navbarCollapse = () => {
    let $mainNav = $("#mainNav");
    if ($mainNav.offset().top > 150) {
        $mainNav.addClass("navbar-shrink");
    } else {
        $mainNav.removeClass("navbar-shrink");
    }
};

// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// DOM ready
$(function() {

    // smooth scroll
    $('#topNav a').on('click', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $target = $(target);
        // console.log(target);
        // target = $(target).length ? target : $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top - 40
            }, 1000);
            return false;
        }
    });

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
