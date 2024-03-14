var new_main;

function myFunc(id){

    // Remove the active class from all links
    var links = document.querySelectorAll('.topnav a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Toggle the active class on the clicked link
    document.getElementById(id).classList.add('active');

    // Hide the previously displayed main content
    if (new_main) {
        new_main.style.display = "none";
    } else {
        main.style.display = "none";
    }
    
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

function adjustmargins() {
    var vw = window.innerWidth;
    var threshold = 100;
    if (vw >= threshold) {
        // var margin = -5 + 40 * Math.log(1 + (vw - threshold) / 100); // Calculate margin
        var power = 2.05; // Adjust the exponent as needed
        var margin = Math.pow((vw - threshold) / 100, power) -200;
        margin = Math.max(margin, 30);
    
        // Apply margin to top navigation bar
        var topnav = document.getElementById('topnav');
        topnav.style.marginLeft = margin + 'px';
        
        // Apply margin to main content
        var main = document.getElementById('main');
        main.style.marginLeft = margin + 'px';

        var main = document.getElementById('main_ResearchStatement');
        main.style.marginLeft = margin + 'px';

        var main = document.getElementById('main_ResearchExperience');
        main.style.marginLeft = margin + 'px';

        var main = document.getElementById('main_Contact');
        main.style.marginLeft = margin + 'px';

        var main = document.getElementById('main_CV');
        main.style.marginLeft = margin + 'px';
    } 
    else {
        // Reset margin if viewport width is below threshold
        var topnav = document.getElementById('topnav');
        topnav.style.marginLeft = '';
        
        var main = document.getElementById('main');
        main.style.marginLeft = '';

        var main = document.getElementById('main_ResearchStatement');
        main.style.marginLeft = '';

        var main = document.getElementById('main_ResearchExperience');
        main.style.marginLeft = '';

        var main = document.getElementById('main_Contact');
        main.style.marginLeft = '';

        var main = document.getElementById('main_CV');
        main.style.marginLeft = '';
    }
}

window.addEventListener('resize', adjustmargins);


document.addEventListener('DOMContentLoaded', adjustmargins);