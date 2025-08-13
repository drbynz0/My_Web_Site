// Affichage du bloc d'avis lors du clic sur le bouton flottant
reviewBlock = document.querySelector(".review-block");
document.getElementById("openReviewBlock").addEventListener("click", function() {
    reviewBlock.classList.add('rbactive');
});

// Fermeture du bloc d'avis lors du clic sur le bouton de fermeture
document.getElementById("closeReviewBlock").addEventListener("click", function() {
    reviewBlock.classList.remove('rbactive');
});


// Animation pour les éléments de la timeline
document.addEventListener('DOMContentLoaded', function() {
    const educationCards = document.querySelectorAll('.education-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });
    
    educationCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transition = 'opacity 1s ease, transform 1s ease';
        
        if (card.classList.contains('left')) {
            card.style.transform = 'translateX(-20px)';
        } else {
            card.style.transform = 'translateX(20px)';
        }
        
        observer.observe(card);
    });
});

// Animation des compétences principales
document.addEventListener('DOMContentLoaded', function() {
    const competenceCards = document.querySelectorAll('.skill-card');
    const otherSkills = document.querySelectorAll('.other-skill');
    const allSkills = [...competenceCards, ...otherSkills];
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'rotateX(0) translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    allSkills.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transition = 'opacity 1s ease, transform 1s ease';
        card.style.transform = 'rotateX(30deg) translateY(20px)';
        
        observer.observe(card);
    });
});


