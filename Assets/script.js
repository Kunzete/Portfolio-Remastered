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
        contain: true
    });
});
