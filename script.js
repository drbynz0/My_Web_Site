
function adjustToggleVisibility() {
    var toggle = document.querySelector('.menu-toggle');
    if (window.innerWidth <= 770) {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
}

var header = document.getElementById("barnav");
const menuToggle = document.querySelector('.menu-toggle');
const entete2 = document.querySelector('.entete2');
const sousPage = document.querySelector('.sous-page');
var sousMenu = document.getElementById("sous-menu");
var flecheSousMenu = document.querySelector(".entete i");

function sousPageVisible(){
    entete2.classList.add('visible');
    sousPage.classList.add('widthSp');
    header.classList.add('bnoption');
    menuToggle.classList.add('menuToggleRotate');
}

function sousPageHidden(){
    entete2.classList.remove('visible');
    sousPage.classList.remove('widthSp');
    header.classList.remove('bnoption');
    menuToggle.classList.remove('menuToggleRotate');
}
sousPage.addEventListener('mouseenter', () => {
    sousPageVisible();
});

sousPage.addEventListener('mouseleave', () => {
    sousPageHidden();
});
menuToggle.addEventListener('click', ()=> {
    if(header.classList.contains('bnoption')){
        sousPageHidden();
    } else {
        sousPageVisible();
    }
} );


var summary = document.getElementById("summary");
var blocSousMenu = document.getElementById('bloc-sous-menu');

function sousMenuOptions(){
        if (window.innerWidth <= 770) {
            header.style.justifyContent = 'space-between';
            entete2.style.marginLeft = '0px'
            flecheSousMenu.style.transform = 'rotate(90deg)';
            sousMenu.classList.remove('sousmenuHidden');
        }else {
            entete2.style.marginLeft = '100px'
            header.style.justifyContent = 'normal';
            flecheSousMenu.style.transform = 'rotate(0deg)';
            sousMenu.classList.add('sousmenuHidden');
        }
    blocSousMenu.addEventListener("mouseenter", () => { 
    blocSousMenu.classList.add('blocSousMenuOption');
    summary.classList.add('summayOption');
    if (window.innerWidth <= 770) {
        flecheSousMenu.style.transform = 'rotate(-90deg)';
        sousMenu.classList.add('sousmenuOption');
        sousMenu.classList.remove('sousmenuVisible');
        } else {
            flecheSousMenu.style.transform = 'rotate(-180deg)';
            sousMenu.classList.add('sousmenuVisible');
            sousMenu.classList.remove('sousmenuHidden');
        }    
    }
    );
    blocSousMenu.addEventListener("mouseleave", () => { 
        blocSousMenu.classList.remove('blocSousMenuOption');
        sousMenu.classList.remove('sousmenuOption'); 
        summary.classList.remove('summaryOption');
        if (window.innerWidth <= 770) {
            flecheSousMenu.style.transform = 'rotate(90deg)';
            sousMenu.classList.remove('sousmenuOption');

        } else {
            flecheSousMenu.style.transform = 'rotate(0deg)';
            sousMenu.classList.remove('sousmenuVisible');
            sousMenu.classList.add('sousmenuHidden');
        }
        }
    );
}
document.querySelector('.menu-toggle').addEventListener('click', function(event) {
    var sousMenu = document.getElementById("sous-menu");
    event.stopPropagation();
    toggleMenu();
    if(window.innerWidth <= 770 && sousMenu.style.display === "block" && header.style.height === "300px") {
        header.style.height = "360px"
    }
});

// Masquer ou afficher le menu en fonction de la largeur de la fenêtre
window.addEventListener('resize', function() {
    var barnav1 = document.querySelector('.barnav1');
    var bloc = document.querySelectorAll('.bloc');
    sousMenuOptions();
    adjustToggleVisibility();

    if (window.innerWidth > 770) {
        header.style.alignItems = 'center';
        barnav1.style.display = 'flex';
        sousMenu.classList.add('sousmenuHidden');
        for(let i = 0; i <= bloc.length; i++){
            bloc[i].style.minWidth = '600px'
            bloc[i].style.height = '300px'
            }
    } else {
        header.style.alignItems = 'normal';
        barnav1.style.display = 'block';
        for(let i = 0; i <= bloc.length; i++){
            bloc[i].style.minWidth = '100%'
            bloc[i].style.height = 'auto'
            }
            sousMenu.classList.remove('sousmenuHidden');

    }
});

// Initialisation pour s'assurer que les états sont corrects lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
   var barnav1 = document.querySelector('.barnav1');
    var bloc = document.querySelectorAll('.bloc');
    var blocWidth;
    adjustToggleVisibility();
    sousMenuOptions();

    if (window.innerWidth > 770) {
        header.style.alignItems = 'center';
        header.style.display = 'flex';
        barnav1.style.display = 'flex';
        menu.style.display = 'flex';
        for(let i = 0; i <= bloc.length; i++){
        bloc[i].style.minWidth = '600px'
        bloc[i].style.height = '300px';
        sousMenu.classList.add('sousmenuHidden');
        }
    } else {
        header.style.alignItems = 'normal';
        header.style.display = 'flex';
        barnav1.style.display = 'block';
        for(let i = 0; i <= bloc.length; i++){
            bloc[i].style.minWidth = '100%';
            bloc[i].style.height = 'auto';
            }
            sousMenu.classList.remove('sousmenuHidden');

        }
});

// Script du blog
const arrows = document.querySelectorAll('.arrow');

arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        const currentSlide = document.querySelector('.video-short.active');
        const nextSlide = currentSlide.nextElementSibling || document.querySelector('.video-short:first-child');
        const currentArrow = arrow.previousElementSibling || document.querySelector('.arrow:last-child');
        const nextArrow = currentArrow.nextElementSibling || document.querySelector('.arrow:first-child');

        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');

        currentArrow.classList.remove('active');
        nextArrow.classList.add('active');
    });
});

function authershort() {
    var authershort = document.getElementById("authershort");
    var afficheshort = document.getElementById("afficheshort");

    var computedStyle = window.getComputedStyle(authershort);
    var displayStyle = authershort.style.display || computedStyle.getPropertyValue("display");

    if (displayStyle === "none") {
        authershort.style.display = "grid";
        authershort.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
        afficheshort.textContent = "Afficher moins";
    } else {
        authershort.style.display = "none";
        afficheshort.textContent = "Afficher plus";
    }
}

// défilement des blocs
//document.addEventListener("DOMContentLoaded", function() {
    const gauche = document.querySelector('.gauche');
    const droite = document.querySelector('.droite');
    const blocContainer = document.querySelector('.bloc-container');
    const blocs = document.querySelectorAll('.bloc');
    let currentImg = 0;
    let timeout;
    const DELAY = 3000; 
    const blocWidth = blocs[currentImg].offsetWidth;

    function updateImg() {


        if (currentImg >= blocs.length) {
            currentImg = 0; 
        } else if(currentImg < 0){
            currentImg = blocs.length; 
        }

        if(window.innerWidth >= 770) {
        blocContainer.style.transform = `translateX(-${currentImg * 60}%)`;
        } else {
            blocContainer.style.transform = `translateX(-${currentImg * (window.innerWidth - 20)}px)`;
            }
    }

    updateImg();


    gauche.addEventListener('click', function() {
        currentImg--;
        updateImg();
    });

    // Bouton droite pour avancer d'une image
    droite.addEventListener('click', function() {
        currentImg++;
        updateImg();
    });

    // Déclenche l'animation automatique
    setInterval(() => {
        currentImg++;
        updateImg();
    }, 4000); 
    


