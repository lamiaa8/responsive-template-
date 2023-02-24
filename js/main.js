var header = document.getElementById("header");
var upTop = document.getElementById("upTop");

window.onscroll = function() {
    if( window.scrollY > 300 ) {
        header.classList.add("headerFixed")
        upTop.style.display = "block";
        upTop.addEventListener("click" , function(){
            window.scroll({
                top:0,
                behavior:"smooth"
            })
        })
    }
    else{
        header.classList.remove("headerFixed")
        upTop.style.display = "none";
    }
}