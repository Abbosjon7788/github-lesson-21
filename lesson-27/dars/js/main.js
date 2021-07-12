$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 5
            }
        }

    });
});