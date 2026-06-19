const nav_show = document.getElementById("nav_show");
const btn_open = document.getElementById("btn_open")
// click color 
const click_blue = document.getElementById("click_blue");
const header = document.getElementById("header");
const click_white = document.getElementById("click_white")
const click_red = document.getElementById("click_red")
const click_yellow = document.getElementById("click_yellow")
const click_none = document.getElementById("click_none")

function color_blue(){
    header.style.backgroundColor = 'blue';
    header.style.color = 'white';
    click_blue.style.backgroundColor = 'blue';
    click_white.style.backgroundColor = '';
    click_red.style.backgroundColor = '';
    click_yellow.style.backgroundColor = '';
}
function color_white(){
    header.style.backgroundColor = 'white';
    header.style.color = 'white';
    click_white.style.backgroundColor = 'white';
    click_red.style.backgroundColor = '';
    click_yellow.style.backgroundColor = '';
    click_blue.style.backgroundColor = '';
}
function color_red(){
    header.style.backgroundColor = 'red';
    header.style.color = 'white';
    click_red.style.backgroundColor = 'red';
    click_white.style.backgroundColor = '';
    click_yellow.style.backgroundColor = '';
    click_blue.style.backgroundColor = '';
}
function color_yellow(){
    header.style.backgroundColor = 'yellow';
    header.style.color = 'white';
    click_yellow.style.backgroundColor = 'yellow';
    click_white.style.backgroundColor = '';
    click_red.style.backgroundColor = '';
    click_blue.style.backgroundColor = '';
}
function color_none(){
    header.style.backgroundColor = '';
    header.style.color = '';
    click_none.style.backgroundColor = '';
    click_white.style.backgroundColor = '';
    click_red.style.backgroundColor = '';
    click_yellow.style.backgroundColor = '';
    click_blue.style.backgroundColor = '';
}


click_blue.addEventListener("click" , function(){
    color_blue();
})
click_white.addEventListener("click" , function(){
    color_white();
})
click_red.addEventListener("click" , function(){
    color_red();
})
click_yellow.addEventListener("click" , function(){
    color_yellow();
})
click_none.addEventListener("click" , function(){
    color_none();
})
// action manu navbar
btn_open.addEventListener("click" , ()=>{
    if(nav_show.style.display === "none"){
        nav_show.style.display = "block";
    }else{
        nav_show.style.display = "none";
    }
})