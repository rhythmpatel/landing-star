(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

try {
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap/js/src/util */ "./node_modules/bootstrap/js/src/util.js");

  __webpack_require__(/*! bootstrap/js/src/button */ "./node_modules/bootstrap/js/src/button.js");

  __webpack_require__(/*! bootstrap/js/src/collapse */ "./node_modules/bootstrap/js/src/collapse.js");

  __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
} catch (e) {} // DOM ready


$(function () {
  // view all chapters
  $('.view-chapters').on('click', function (e) {
    e.preventDefault();
    $('.chapters').addClass('expand');
    $(this).hide();
  }); // testimonial slider

  $('.testimonials').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  });
});

/***/ }),

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./scripts/app.js ./styles/app.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/abc/Projects/sell/landing-star/html/scripts/app.js */"./scripts/app.js");
module.exports = __webpack_require__(/*! /Users/abc/Projects/sell/landing-star/html/styles/app.scss */"./styles/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=app.js.map