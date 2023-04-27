
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("toggle-header",window.scrollY>0);
});
