var typed = new Typed(".auto-typed", {

    strings: ["Ephraim De Lara", "21 Years Old", "Male"],
    typeSpeed : 60,
    backSpeed : 60,
    loop: true

});

const menu = document.querySelector("#menu-icon");
const nav = document.querySelector(".menus");

menu.addEventListener("click", () => {

    menu.classList.toggle("bx-x");
    nav.classList.toggle("show");

});

const upload_dialog = document.querySelector("#Upload-dialog");
const upload_wrapper = document.querySelector(".upload_wrapper");

const showUploadDialog = (show) => show ? upload_dialog.showModal() : upload_dialog.close();
upload_dialog.addEventListener('click', (e) => !upload_wrapper.contains(e.target) && upload_dialog.close());

const edit_dialog = document.querySelector("#Edit-dialog");
const edit_wrapper = document.querySelector(".edit_wrapper");
const showEditDialog = (show) => show ? edit_dialog.showModal() : edit_dialog.close();
edit_dialog.addEventListener('click', (e) => !edit_wrapper.contains(e.target) && edit_dialog.close());




