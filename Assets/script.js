$(document).ready(function () {
    $('.preloader').css("opacity", "0")
    setTimeout(function () {
        $('.preloader').css("display", "none");
    }, 1100);
});

$(document).ready(function () {
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
