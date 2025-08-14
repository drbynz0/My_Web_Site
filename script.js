document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".affiche-element").forEach(element => {
        observer.observe(element);
    });
});



function adjustToggleVisibility() {
    var toggle = document.querySelector('.menu-toggle');
    const btnCloseMenu = document.querySelector('.btn-close-menu');
    if (window.innerWidth <= 916) {
        toggle.style.display = "block";
        btnCloseMenu.style.display = "block"
    } else {
        toggle.style.display = "none";
        btnCloseMenu.style.display = "none";
    }
}

var header = document.getElementById("header");
const logo = document.querySelector('.logo img');
const menuToggle = document.querySelector('.menu-toggle');
const btnCloseMenu = document.querySelector('.btn-close-menu');
const entete2 = document.querySelector('.pagesUrl');
const sousPage = document.querySelector('.pages');
var sousMenu = document.getElementById("sous-menu");
var flecheSousMenu = document.querySelector(".pageUrl i");

function sousPageVisible(){
    entete2.classList.add('visible');
    menuToggle.classList.add('menuToggleHidden');
    btnCloseMenu.classList.add('btnCloseMenuVisible');
}

function sousPageHidden(){
    entete2.classList.remove('visible');
    menuToggle.classList.remove('menuToggleHidden');
    btnCloseMenu.classList.remove('btnCloseMenuVisible');
}

function sousPageOptions() {

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

var summary = document.getElementById("summary");
var blocSousMenu = document.getElementById('bloc-sous-menu');

function sousMenuOptions(){
        if (window.innerWidth <= 916) {
            header.style.height = '70px';
            header.style.justifyContent = 'space-between';
            logo.style.marginLeft = '5px';
            entete2.style.marginLeft = '0px';
            flecheSousMenu.style.transform = 'rotate(90deg)';
        }else {
            header.style.height = '80px';
            logo.style.marginLeft = '60px';
            entete2.style.marginLeft = '150px'
            header.style.justifyContent = 'normal';
            flecheSousMenu.style.transform = 'rotate(0deg)';
        }

    blocSousMenu.addEventListener("mouseleave", () => { 
        sousMenu.classList.remove('visible');
    }
    );
    blocSousMenu.addEventListener("click", () => { 
        if(sousMenu.classList.contains('visible')){
            sousMenu.classList.remove('visible');
        } else {
            sousMenu.classList.add('visible');
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
    var barnav1 = document.querySelector('.pages');
    var bloc = document.querySelectorAll('.bloc');
    sousPageOptions();
    sousMenuOptions();
    adjustToggleVisibility();

    if (window.innerWidth > 916) {
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

var bloc = document.querySelectorAll('.bloc');
// Initialisation pour s'assurer que les états sont corrects lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
   var barnav1 = document.querySelector('.barnav1');
    adjustToggleVisibility();
    sousMenuOptions();
    sousPageOptions();

    if (window.innerWidth > 916) {
        header.style.display = 'flex';
        barnav1.style.display = 'flex';
        menu.style.display = 'flex';
        for(let i = 0; i <= bloc.length; i++){
        bloc[i].style.minWidth = '35%'
        bloc[i].style.height = '300px';
        sousMenu.classList.add('sousmenuHidden');
        }
    } else {
        header.style.display = 'flex';
        barnav1.style.display = 'block';
        for(let i = 0; i <= bloc.length; i++){
            bloc[i].style.minWidth = '100%';
            bloc[i].style.height = 'auto';
            }
            sousMenu.classList.remove('sousmenuHidden');

        }
});
    


