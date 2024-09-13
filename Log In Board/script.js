const typedElement = document.querySelector(".typed");

const typed = new Typed(typedElement, {

    strings: ["A digital portfolio", "exclusively for grade 7 only", "a prototype portfolio"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true

});

const dialog = document.querySelector("#LogIn-dialog");
const wrapper = document.querySelector(".wrapper");

const showLogInDialog = (show) => show ? dialog.showModal() : dialog.close();

dialog.addEventListener('click', (e) => !wrapper.contains(e.target) && dialog.close());