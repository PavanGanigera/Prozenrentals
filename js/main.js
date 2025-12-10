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

    // WOW
    if (typeof WOW !== "undefined") {
        new WOW().init();
    }

    // AOS safe init
    if (typeof AOS !== "undefined") {
        AOS.init();
    } else {
        console.warn("AOS is not loaded – skipping AOS.init()");
    }

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
    $('#videoModal').on('shown.bs.modal', function () {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });
    $('#videoModal').on('hide.bs.modal', function () {
        $("#video").attr('src', $videoSrc);
    });

    // Services link: open services.html instead of only dropdown
    const servicesLink = document.querySelector('.nav-item.dropdown > a.nav-link.dropdown-toggle[href="services.html"]');
    if (servicesLink) {
        servicesLink.addEventListener('click', function (e) {
            e.stopPropagation();
            window.location.href = this.getAttribute('href');
        });
    }

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
            0: { items: 2 },
            600: { margin: 0, items: 3 },
            1000: { items: 5, margin: 0 }
        }
    });

})(jQuery);


// 🔽 WhatsApp component loader with fallback paths
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("whatsapp-btn");
    if (!container) return;

    // primary try (root pages)
    fetch("whatsapp.html")
        .then(res => {
            if (!res.ok) throw new Error("primary path failed");
            return res.text();
        })
        .then(data => {
            container.innerHTML = data;
        })
        .catch(() => {
            // fallback for /services/ pages
            fetch("../whatsapp.html")
                .then(res => {
                    if (!res.ok) throw new Error("backup path failed");
                    return res.text();
                })
                .then(data => {
                    container.innerHTML = data;
                })
                .catch(err => console.log("WhatsApp component loading error:", err));
        });
});
