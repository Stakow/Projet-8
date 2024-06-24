const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


document.addEventListener('DOMContentLoaded', () => {
	// ÉTAPE 1: Sélection des éléments DOM nécessaires
    const leftArrow = document.querySelector('.arrow_left');
    const rightArrow = document.querySelector('.arrow_right');
    const banner = document.getElementById('banner');
    const dotsContainer = document.querySelector('.dots');
	//* ÉTAPE 2: Définition des slides avec images et texte associé *// 
    const slides = [
        {
            "image":"slide1.jpg",
            "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image":"slide2.jpg",
            "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image":"slide3.jpg",
            "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image":"slide4.png",
            "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];
	 // ÉTAPE 3: Initialisation de l'index de l'image courante
    let currentImageIndex = 0;

    // ÉTAPE 4: Création des bullet points
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    });
    
	 // Sélection de tous les bullet points
    const dots = document.querySelectorAll('.dot');

	 // ÉTAPE 5: Fonction pour mettre à jour l'image, le texte et les bullet points
    function updateImage(newIndex) {
        // Mettre à jour l'image et le texte
        const bannerImg = banner.querySelector('.banner-img');
        const bannerText = banner.querySelector('p');
        bannerImg.src = `./assets/images/slideshow/${slides[newIndex].image}`;
        bannerText.innerHTML = slides[newIndex].tagLine;

        // Mettre à jour les bullet points
        dots[currentImageIndex].classList.remove('dot_selected');
        dots[newIndex].classList.add('dot_selected');

        currentImageIndex = newIndex;
    }
    
	// ÉTAPE 6: Gestion du clic sur la flèche gauche
    leftArrow.addEventListener('click', () => {
        console.log('Flèche gauche cliquée');
        alert('Flèche gauche cliquée');
        const newIndex = (currentImageIndex - 1 + slides.length) % slides.length;
        updateImage(newIndex);
    });
    
	 // ÉTAPE 7: Gestion du clic sur la flèche droite
    rightArrow.addEventListener('click', () => {
        console.log('Flèche droite cliquée');
        alert('Flèche droite cliquée');
        const newIndex = (currentImageIndex + 1) % slides.length;
        updateImage(newIndex);
    });
});



