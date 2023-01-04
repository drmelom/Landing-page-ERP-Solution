window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("box",window.scrollY>0);

})
