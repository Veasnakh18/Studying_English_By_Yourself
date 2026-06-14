const nav_show = document.getElementById("nav_show");
const btn_open = document.getElementById("btn_open")

// action manu navbar
btn_open.addEventListener("click" , ()=>{
    if(nav_show.style.display === "none"){
        nav_show.style.display = "block";
    }else{
        nav_show.style.display = "none";
    }
})