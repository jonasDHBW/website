document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    const profiles = document.querySelectorAll(".animal-profile");
    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");
    let currentIndex = 0;
    const visibleProfiles = 3; // Anzahl der sichtbaren Profile

    function updateSliderPosition() {
        sliderContainer.style.transform = `translateX(-${currentIndex * (100 / visibleProfiles)}%)`;
    }

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % profiles.length;
        updateSliderPosition();
    });

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
        updateSliderPosition();
    });

    updateSliderPosition();
});
