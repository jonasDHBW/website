const slider = document.querySelector('.slider-container');
const profiles = document.querySelectorAll('.animal-profile');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function goToSlide(index) {
    // Aktuellen Container verstecken
    profiles.forEach(profile => profile.classList.remove('active', 'prev', 'next'));
    
    // Neuen Container einblenden
    profiles[index].classList.add('active');
    
    // Richtung festlegen für Animation
    if (index > currentIndex) {
        profiles[index].classList.add('next');
        profiles[currentIndex].classList.add('prev');
    } else {
        profiles[index].classList.add('prev');
        profiles[currentIndex].classList.add('next');
    }
    
    currentIndex = index;
}

prevButton.addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = profiles.length - 1;
    }
    goToSlide(newIndex);
});

nextButton.addEventListener('click', () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= profiles.length) {
        newIndex = 0;
    }
    goToSlide(newIndex);
});

// Initial anzeigen
goToSlide(currentIndex);
