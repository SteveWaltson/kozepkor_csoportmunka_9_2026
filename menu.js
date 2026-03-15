var menu = document.getElementById("menu");
var showbt = document.getElementById("showbt");
var click = 0;
function clickmenu() {
    if (menu.className === "vis"){
        menu.className = "hid";
    } else {
        menu.className = "vis";
    }
}
showbt.addEventListener("click", function(){
    clickmenu();
    if (click == 0){
        showbt.innerHTML = "Menü elrejtése"
        click += 1;
    } else {
        showbt.innerHTML = "Menü";
        click = 0;
    }
    
})