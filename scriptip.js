document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section-bloc');

    sections.forEach(function(sectionBloc) {
        const toggleIcon = sectionBloc.querySelector('span i');
        const sousSection = sectionBloc.querySelector('.sous-section');

        const sousSectionHeight = sousSection.scrollHeight;

        toggleIcon.style.transform = 'rotate(180deg)';
        sousSection.classList.remove('ssactive');
        sectionBloc.style.height = '100px';
        sousSection.style.display = 'flex';


        toggleIcon.addEventListener('click', function() {
            if (sousSection.classList.contains('ssactive')) {
                sectionBloc.style.height = '100px';
                sousSection.classList.remove('ssactive');
                toggleIcon.style.transform = 'rotate(180deg)';
            } else {
                sectionBloc.style.height = `${sousSectionHeight + 100}px`;
                sousSection.classList.add('ssactive');
                toggleIcon.style.transform = 'rotate(0deg)';
            }
        });
    });
});
