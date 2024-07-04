


document.addEventListener('DOMContentLoaded', () => {
	// Sélection des éléments DOM nécessaires
    const leftArrow = document.querySelector('.arrow_left');
    const rightArrow = document.querySelector('.arrow_right');
    const banner = document.getElementById('banner');
    const dotsContainer = document.querySelector('.dots');
	
    let currentImageIndex = 0;


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

    // ETAPE 2 + 5

     // Gestion des clics sur les flèches avec boucle infinie
    leftArrow.addEventListener('click', () => {
        console.log('Flèche gauche cliquée');
        let newIndex = currentImageIndex - 1;
        if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
        updateImage(newIndex);
    });

    rightArrow.addEventListener('click', () => {
        console.log('Flèche droite cliquée');
        let newIndex = currentImageIndex + 1;
        if (newIndex >= slides.length) {
        newIndex = 0;
    }
       updateImage(newIndex);
    });
 

	 

    // ÉTAPE 3: Création des bullet points
    slides.forEach((slide, index) => {                              
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);  //.appendChild permettant d'appliquer le code à l'endroit voulu //
    });
    
	 // Sélection de tous les bullet points
    const dots = document.querySelectorAll('.dot');





	 // ÉTAPE 4: Fonction pour mettre à jour l'image, le texte et les bullet points
    function updateImage(newIndex) {
        // Mettre à jour l'image et le texte
        const bannerImg = banner.querySelector('.banner-img');
        const bannerText = banner.querySelector('p');
        bannerImg.src = `./assets/images/slideshow/${slides[newIndex].image}`;
        bannerText.innerHTML = slides[newIndex].tagLine;  // ce que tu contiens sera désormais .. //

        // Mettre à jour les bullet points
        dots[currentImageIndex].classList.remove('dot_selected');
        dots[newIndex].classList.add('dot_selected');

        currentImageIndex = newIndex;
    }

});

