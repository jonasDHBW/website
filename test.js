let currentAnimalIndex = 0;
const animals = document.querySelectorAll('.profile-image');

function showAnimal(index) {
    animals.forEach((animal, idx) => {
        if (idx === index) {
            animal.style.display = 'block';
        } else {
            animal.style.display = 'none';
        }
    });
}

function prevAnimal() {
    currentAnimalIndex--;
    if (currentAnimalIndex < 0) {
        currentAnimalIndex = animals.length - 1;
    }
    showAnimal(currentAnimalIndex);
}

function nextAnimal() {
    currentAnimalIndex++;
    if (currentAnimalIndex >= animals.length) {
        currentAnimalIndex = 0;
    }
    showAnimal(currentAnimalIndex);
}

showAnimal(currentAnimalIndex);
