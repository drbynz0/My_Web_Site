
function adjustToggleVisibility() {
    var toggle = document.querySelector('.menu-toggle');
    if (window.innerWidth <= 770) {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
}

var summary = document.getElementById("summary");
summary.addEventListener("click", function() {
    var header = document.getElementById("entete1");
    var sousMenu = document.getElementById("sous-menu");
    var flecheSousMenu = document.querySelector(".entete i");
    if (window.innerWidth <= 770) {
        if (header.style.height === "360px" && (sousMenu.style.display === "block" || sousMenu.style.display === "") ) {
            header.style.height = "300px";
            sousMenu.style.display = "none"
            flecheSousMenu.style.transform = "rotate(0deg)"
        } else {
            header.style.height = "360px";
            sousMenu.style.display = "block"
            flecheSousMenu.style.transform = "rotate(-180deg)"
        }
    } else {
        if(sousMenu.style.display === "block") {
            sousMenu.style.display = "none";
            flecheSousMenu.style.transform = "rotate(0deg)"
        } else {
            sousMenu.style.display = "block";
            flecheSousMenu.style.transform = "rotate(-180deg)"
        }
    }
});

/* document.addEventListener('click', function(event) {
    var header = document.getElementById("entete1");
    var flecheSousMenu = document.querySelector(".entete i");
    var blocSousMenu = document.getElementById("bloc-sous-menu");
    var sousMenu = document.getElementById("sous-menu");
    if (!blocSousMenu.contains(event.target)) {
        sousMenu.style.display = "none";
        flecheSousMenu.style.transform = "rotate(0deg)";
    }
    if (window.innerWidth <= 770 ) {
        header.style.height = "300px";
    }
});
*/
function toggleMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.entete2');
    var menuIsVisible = menu.style.display === 'flex';
    var header = document.getElementById("entete1");

    menu.style.display = menuIsVisible ? 'none' : 'flex';
    if (menuIsVisible) {
        document.removeEventListener('click', hideMenu);
        header.style.height = "60px";
        toggle.style.transform = "rotate(0deg)";
    } else {
        document.addEventListener('click', hideMenu);
        header.style.height = "300px";
        toggle.style.transform = "rotate(90deg)";
    }
}

function hideMenu(event) {
    var toggle = document.querySelector('.menu-toggle');
    var header = document.getElementById("entete1");
    var menu = document.querySelector('.entete2');
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        toggle.style.transform = "rotate(0deg)";
        menu.style.display = 'none';
        header.style.height = "60px";
        document.removeEventListener('click', hideMenu);
    }
}

document.querySelector('.menu-toggle').addEventListener('click', function(event) {
    var header = document.getElementById("entete1");
    var sousMenu = document.getElementById("sous-menu");
    event.stopPropagation();
    toggleMenu();
    if(window.innerWidth <= 770 && sousMenu.style.display === "block" && header.style.height === "300px") {
        header.style.height = "360px"
    }
});

// Masquer ou afficher le menu en fonction de la largeur de la fenêtre
window.addEventListener('resize', function() {
    var menu = document.querySelector('.entete2');
    var bloc = document.querySelectorAll('.bloc');
    adjustToggleVisibility();

    if (window.innerWidth > 768) {
        menu.style.display = 'flex';
        for(let i = 0; i <= bloc.length; i++){
            bloc[i].style.minWidth = '600px'
            bloc[i].style.height = '300px'
            }
    } else {
        menu.style.display = 'none';
        for(let i = 0; i <= bloc.length; i++){
            bloc[i].style.minWidth = '100%'
            bloc[i].style.height = 'auto'
            }
    }
});

// Initialisation pour s'assurer que les états sont corrects lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.entete2');
    var bloc = document.querySelectorAll('.bloc');
    var blocWidth;
    adjustToggleVisibility();

    if (window.innerWidth > 770) {
        menu.style.display = 'flex';
        for(let i = 0; i <= bloc.length; i++){
        blocWidth = bloc[i].style.minWidth = '600px'
        bloc[i].style.height = '300px'
        }
    } else {
        menu.style.display = 'none';
        for(let i = 0; i <= bloc.length; i++){
            blocWidth = bloc[i].style.minWidth = '100%'
            bloc[i].style.height = 'auto'
            }
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
document.addEventListener("DOMContentLoaded", function() {
    const gauche = document.querySelector('.gauche');
    const droite = document.querySelector('.droite');
    const container = document.querySelector('.bloc-container');

    gauche.addEventListener('click', function() {
        if (window.innerWidth >= 770) {
            container.scrollLeft -= 610;
        } else {
            container.scrollLeft -= (window.innerWidth - 8);
        }
    });

    droite.addEventListener('click', function() {
        if (window.innerWidth >= 770) {
            container.scrollLeft += 610;
        } else {
            container.scrollLeft += (window.innerWidth - 8);
        }
    });
});

