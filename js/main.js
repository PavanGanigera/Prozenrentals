(function ($) {
    "use strict";
    const QuoteLinks = document.querySelectorAll('.header a.btn[href="get-quote.html"]');
    QuoteLinks.forEach(link => {
        link.setAttribute('href', 'contact.html');
        // link.textContent = "Contact Us";
    });
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();
    AOS.init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Experience
    $('.experience').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Clients carousel
    jQuery('.clients-carousel.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 20,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                margin: 0,
                items: 3,
            },
            1000: {
                items: 5,
                margin: 0,
            }
        }
    });

})(jQuery);

// document.addEventListener("DOMContentLoaded", function () {


// });

// document.addEventListener('DOMContentLoaded', function () {
//     const dropdown = document.querySelector('.generator-dropdown');
//     const menu = document.querySelector('.generator-menu');

//     dropdown.addEventListener('click', function () {
//         menu.classList.toggle('visible');
//     });
// });
