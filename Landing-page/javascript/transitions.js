window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("box",window.scrollY>0);

})
addEventListener("DOMContentLoaded", function(){
    const btn_menu = document.querySelector(".btn-menu")
    if(btn_menu){

        btn_menu.addEventListener("click", function(){
            const main_menu = document.querySelector('.main-menu')
            main_menu.classList.toggle("show")
    
        })
    }
    


})
