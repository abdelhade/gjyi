let toggle = document.getElementById("toggle");
let sidebar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");

toggle.addEventListener("click", function() {
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")){
        overlay.style.left = "0";
    } else {
        overlay.style.left = "-100%";
    }
    if (sidebar.classList.contains("open")){
        toggle.classList.replace("fa-bars", "fa-xmark")
    } else {
        toggle.classList.replace("fa-xmark", "fa-bars")
    }
});

window.onscroll = function (){
    if (window.scrollY >= sidebar.offsetTop){
        sidebar.classList.add("fixed-top");
    } if (window.scrollY === 0) {
        sidebar.classList.remove("fixed-top")
    }
}


