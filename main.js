var new_main;

function myFunc(id){
    
    if (new_main){
        new_main.style.display = "none";
    } else {
        main.style.display = "none";
    }
    new_main = document.getElementById("main_"+id);
    new_main.style.display="block";
    if (new_main.className==="pdf"){
        if (window.mobileCheck()) {
            myFunc(id+"2")
        }
    }
    
}