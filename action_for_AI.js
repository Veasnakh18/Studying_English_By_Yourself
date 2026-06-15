const click_befor_read = document.getElementById("click_befor_read");
const click_show = document.getElementById("click_show");
// click for show Title

click_befor_read.addEventListener("click" , ()=>{
    if(click_show.style.display == "none"){
        click_show.style.display = "block";
    }else{
        click_show.style.display = "none";
    }
});