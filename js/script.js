document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("menu-btn").addEventListener("click", function () {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
    });
})
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("nav-link1").addEventListener("click", function () {
        document.getElementById("menu-btn").classList.remove("active");
        document.getElementById("nav").classList.remove("active");
    });
})
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("nav-link2").addEventListener("click", function () {
        document.getElementById("menu-btn").classList.remove("active");
        document.getElementById("nav").classList.remove("active");
    });
})
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("nav-link3").addEventListener("click", function () {
        document.getElementById("menu-btn").classList.remove("active");
        document.getElementById("nav").classList.remove("active");
    });
})
