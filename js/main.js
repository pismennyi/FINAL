(function() {
    'use strict';

    $(function() {

        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            arrows: true,
            dots: false,
            infinite: true,
            responsive: [{
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }]
        });

    });
})();


$(document).on('click', '.head .header-menu .header-menu-list a', function(e) {

            e.preventDefault();

            var elemId = $(this).attr('href');

            if (elemId.length > 2) {
                var top = $(elemId).offset().top;

                $('body').animate({
                    scrollTop: top
                }, 1500);
            }

        });
