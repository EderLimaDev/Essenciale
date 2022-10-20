let btn = document.querySelector(".menu-lado-btn");
let btn_close_menu = document.querySelector(".btn-close-menu");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle("active");
};

btn_close_menu.onclick = function(){
    sidebar.classList.remove("active")
};