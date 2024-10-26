document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.diplome, .experience, .competence');

    sections.forEach(function(section) {
        const toggleIcon = section.querySelector('span i');
        const sousSection = section.querySelector('.sous-section');

        sousSection.style.display = 'flex';

        toggleIcon.addEventListener('click', function() {
            if (sousSection.style.display === 'flex') {
                sousSection.style.display = 'none';
                toggleIcon.style.transform = 'rotate(180deg)';
            } else {
                sousSection.style.display = 'flex';
                toggleIcon.style.transform = 'rotate(0deg)';
            }
        });
    });
});
