document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const icon = themeToggle.querySelector("i");
    const text = document.getElementById("theme-text");

    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
            text.textContent = " 🌙 ";
            localStorage.setItem("theme", "dark");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
            text.textContent = "☀️";
            localStorage.setItem("theme", "light");
        }
    }

    themeToggle.addEventListener("click", toggleTheme);

    // Pastikan tema tetap saat refresh
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        text.textContent = "🌙";
    }
});
