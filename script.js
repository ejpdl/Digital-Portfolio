var typed = new Typed(".auto-typed", {

    strings: ["Ephraim Justin Paul D. De Lara", "21 Years Old", "Male"],
    typeSpeed : 60,
    backSpeed : 60,
    loop: true

});

const menu = document.querySelector("#menu-icon");
const nav = document.querySelector(".menus");

menu.addEventListener("click", () => {

    menu.classList.toggle("bx-x");
    nav.classList.toggle("show");

})

