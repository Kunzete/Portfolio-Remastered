$(document).ready(function () {
    setTimeout(function () {
        $('.preloader').css("opacity", "0")
    }, 1600);
    setTimeout(function () {
        $('.preloader').css("display", "none")
    }, 1900);

    $('#about').click(function () {
        $('.About-me').css("display", "block");
        $('#resume').removeClass('active')
        $('#contact').removeClass('active')
        $('#work').removeClass('active')
        $('.work').css("display", "none");
        $('#about').addClass('active')
        $('.resume').css("display", "none");
        $('.contact').css("display", "none");
    })

    $('#resume').click(function () {
        $('.About-me').css("display", "none");
        $('.contact').css("display", "none");
        $('#work').removeClass('active')
        $('.work').css("display", "none");
        $('#about').removeClass('active')
        $('#contact').removeClass('active')
        $('#resume').addClass('active')
        $('.resume').css("display", "block");
    })


    $('#work').click(function () {
        $('.About-me').css("display", "none");
        $('.resume').css("display", "none");
        $('.contact').css("display", "none")
        $('.work').css("display", "block")
        var $grid = $(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: ".grid-sizer",
            },
        });
        // Ensure Isotope layout is initialized and adjusted
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });

        // Recalculate layout on window resize
        $(window).resize(function () {
            $grid.isotope('layout');
        });
        // Filter items on button click
        $('.filters button').click(function () {
            $('.filters button').removeClass('button-active');
            $(this).addClass('button-active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        $('#about').removeClass('active')
        $('#resume').removeClass('active')
        $('#contact').removeClass('active')
        $('#work').addClass('active')
    })

    $('#contact').click(function () {
        $('.About-me').css("display", "none");
        $('#work').removeClass('active')
        $('.work').css("display", "none");
        $('.resume').css("display", "none");
        $('.contact').css("display", "block")
        $('#about').removeClass('active')
        $('#resume').removeClass('active')
        $('#contact').addClass('active')
    })

    //navbar Button
    $('#about2').click(function () {
        $('.About-me').css("display", "block");
        $('.work').css("display", "none");
        $('.resume').css("display", "none");
        $('.contact').css("display", "none");
    })

    $('#resume2').click(function () {
        $('.About-me').css("display", "none");
        $('.contact').css("display", "none");
        $('.work').css("display", "none");
        $('.resume').css("display", "block");
    })

    $('#work2').click(function () {
        $('.About-me').css("display", "none");
        $('.resume').css("display", "none");
        $('.contact').css("display", "none")
        $('.work').css("display", "block")
    })

    $('#contact2').click(function () {
        $('.About-me').css("display", "none");
        $('.work').css("display", "none");
        $('.resume').css("display", "none");
        $('.contact').css("display", "block")
    })

    const themeToggle = $(".themeToggle");

    themeToggle.click(function () {
        const body = $("body");

        body.toggleClass("dark-theme");
        if (themeToggle.hasClass("bx-moon")) {
            themeToggle.removeClass("bx-moon");
            themeToggle.addClass("bx-sun");
        } else {
            themeToggle.removeClass("bx-sun");
            themeToggle.addClass("bx-moon");
        }
    });

    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
    });

    $('.hamburger').click(() => {
        if ($('.nav2').css("display") === 'none') {
            $('.nav2').css("display", 'block');
        } else {
            $('.nav2').css("display", 'none');
        }
    });
});