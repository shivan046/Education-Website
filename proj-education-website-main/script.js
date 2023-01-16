let menuBtn = document.getElementById("menu-btn");
let menuClose = document.getElementById("menu-close");
let ul = document.querySelector("ul");
function menuClick(){
    ul.style.right = "0px";
} 
menuClose.addEventListener("click" , ()=>{
    ul.style.right = "-220px";
})