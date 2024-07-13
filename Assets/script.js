document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".themeToggle");

    themeToggle.addEventListener("click", () => {
        const body = document.querySelector("body");

        body.classList.toggle("dark-theme");
        if (themeToggle.classList.contains("bx-moon")) {
            themeToggle.classList.remove("bx-moon");
            themeToggle.classList.add("bx-sun");
        } else {
            themeToggle.classList.remove("bx-sun");
            themeToggle.classList.add("bx-moon");
        }
    });
});
