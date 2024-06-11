// script.js

const humans = {
    dogs: [
        {
            name: "Jogging John",
            activityLevel: "active",
            description: "Liebt Joggen und Ballspiele.",
            image: "images/jogging-john.jpg"
        },
        {
            name: "Family Fiona",
            activityLevel: "family",
            description: "Hat drei Kinder und genießt die Zeit mit der Familie.",
            image: "images/family-fiona.jpg"
        }
    ],
    cats: [
        {
            name: "Calm Carla",
            activityLevel: "calm",
            description: "Liebt es zu lesen und genießt eine ruhige Umgebung.",
            image: "images/calm-carla.jpg"
        },
        {
            name: "Cuddle Chris",
            activityLevel: "calm",
            description: "Mag Couchzeit und Kuscheln.",
            image: "images/cuddle-chris.jpg"
        }
    ],
    "small-animals": [
        {
            name: "Careful Claire",
            activityLevel: "calm",
            description: "Sehr sorgfältig und aufmerksam.",
            image: "images/careful-claire.jpg"
        },
        {
            name: "Kid-Friendly Kate",
            activityLevel: "family",
            description: "Hat zwei Kinder und liebt es, Zeit mit ihnen zu verbringen.",
            image: "images/kid-friendly-kate.jpg"
        }
    ],
    "exotic-humans": [
        {
            name: "Adventurous Alex",
            activityLevel: "active",
            description: "Liebt Abenteuer und exotische Reisen.",
            image: "images/adventurous-alex.jpg"
        },
        {
            name: "Zen Zoe",
            activityLevel: "calm",
            description: "Genießt Meditation und ruhige Momente.",
            image: "zen-zoe.jpg"
        }
    ]
};

function displayHumans(category) {
    const humansContainer = document.getElementById('humans');
    humansContainer.innerHTML = '';
    humans[category].forEach(human => {
        const humanDiv = document.createElement('div');
        humanDiv.className = 'human-profile';
        humanDiv.innerHTML = `
            <img src="${human.image}" alt="${human.name}">
            <h3>${human.name}</h3>
            <p>${human.description}</p>
        `;
        humansContainer.appendChild(humanDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop().replace('.html', '');
    displayHumans(page);
});
