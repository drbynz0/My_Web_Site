function adjustToggleVisibility() {
    var toggle = document.querySelector('.menu-toggle');
    const btnCloseMenu = document.querySelector('.btn-close-menu');
    if (window.innerWidth <= 770) {
        toggle.style.display = "block";
        btnCloseMenu.style.display = "block"
    } else {
        toggle.style.display = "none";
        btnCloseMenu.style.display = "none"
    }
}



var header = document.getElementById("barnav");
const menuToggle = document.querySelector('.menu-toggle');
const btnCloseMenu = document.querySelector('.btn-close-menu');
const entete2 = document.querySelector('.entete2');
const sousPage = document.querySelector('.sous-page');
var sousMenu = document.getElementById("sous-menu");
var flecheSousMenu = document.querySelector(".entete i");

function sousPageVisible(){
    entete2.classList.add('visible');
    sousPage.classList.add('widthSp');
    header.classList.add('bnoption');
    menuToggle.classList.add('menuToggleHidden');
    btnCloseMenu.classList.add('btnCloseMenuVisible');
}

function sousPageHidden(){
    entete2.classList.remove('visible');
    sousPage.classList.remove('widthSp');
    header.classList.remove('bnoption');
    menuToggle.classList.remove('menuToggleHidden');
    btnCloseMenu.classList.remove('btnCloseMenuVisible');
}

function sousPageOptions() {
/*sousPage.addEventListener('mouseenter', () => {
    sousPageVisible();
});*/

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

btnCloseMenu.addEventListener('click', ()=> {
    sousPageHidden();
});
};

function sousMenuVisible(){
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
};

function sousMenuHidden() {
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
};

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

    blocSousMenu.addEventListener("mouseleave", () => { 
        sousMenuHidden();
    }
    );
    blocSousMenu.addEventListener("click", () => { 
        if(sousMenu.classList.contains('sousmenuOption')){
            sousMenuHidden();
        } else {
            sousMenuVisible();
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
    sousPageOptions();
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
    sousPageOptions();

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

// Défilement des blocs
document.addEventListener("DOMContentLoaded", function() {
    const gauche = document.querySelector('.gauche');
    const droite = document.querySelector('.droite');
    const blocContainer = document.querySelector('.blocs-news-container');
    const blocs = document.querySelectorAll('.bloc');

    // Calculer la largeur d'un bloc une fois, après le chargement de la page
    const blocWidth = 370;
    const totalWidth = blocWidth * blocs.length;
    let currentScrollPosition = 0;
    let scrollDirection = 1; // 1 pour aller vers la droite, -1 pour aller vers la gauche

    // Fonction pour faire défiler manuellement vers la gauche
    function scrollLeft() {
        currentScrollPosition -= blocWidth;
        if (currentScrollPosition < 0) {
            currentScrollPosition = 0; // Empêche de dépasser le bord gauche
        }
        blocContainer.scrollLeft = currentScrollPosition;
    }

    // Fonction pour faire défiler manuellement vers la droite
    function scrollRight() {
        currentScrollPosition += blocWidth;
        if (currentScrollPosition > totalWidth - blocContainer.clientWidth) {
            currentScrollPosition = totalWidth - blocContainer.clientWidth; // Empêche de dépasser le bord droit
        }
        blocContainer.scrollLeft = currentScrollPosition;
    }

    // Ajoute des écouteurs d'événements aux boutons
    gauche.addEventListener('click', scrollLeft);
    droite.addEventListener('click', scrollRight);

    // Fonction de défilement automatique
    function autoScroll() {
        currentScrollPosition += blocWidth * scrollDirection;

        // Vérifie si on atteint le bord droit
        if (currentScrollPosition >= totalWidth - blocContainer.clientWidth) {
            scrollDirection = -1; // Inverse la direction pour aller vers la gauche
            currentScrollPosition = totalWidth - blocContainer.clientWidth;
        }
        // Vérifie si on atteint le bord gauche
        else if (currentScrollPosition <= 0) {
            scrollDirection = 1; // Inverse la direction pour aller vers la droite
            currentScrollPosition = 0;
        }

        blocContainer.scrollLeft = currentScrollPosition;
    }

    // Défilement automatique toutes les 3 secondes
    setInterval(autoScroll, 3000);
});


    


