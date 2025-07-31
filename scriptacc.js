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
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        if (card.classList.contains('left')) {
            card.style.transform = 'translateX(-20px)';
        } else {
            card.style.transform = 'translateX(20px)';
        }
        
        observer.observe(card);
    });
});


document.querySelectorAll('.projet-apercu').forEach(function(apercu) {
    const video = apercu.querySelector('.projet-video');
    const fullscreenBtn = apercu.querySelector('.fullscreen-btn');
    const progressBar = apercu.querySelector('.video-progress');

    if (fullscreenBtn && video) {
        fullscreenBtn.addEventListener('click', function() {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        });
    }

    if (progressBar && video) {
        video.addEventListener('timeupdate', function() {
            const percent = (video.currentTime / video.duration) * 100;
            progressBar.value = percent || 0;
        });

        progressBar.addEventListener('input', function() {
            video.currentTime = (progressBar.value / 100) * video.duration;
        });
    }
});


