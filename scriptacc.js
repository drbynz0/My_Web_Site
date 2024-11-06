// Affichage du bloc d'avis lors du clic sur le bouton flottant
reviewBlock = document.querySelector(".review-block");
document.getElementById("openReviewBlock").addEventListener("click", function() {
    reviewBlock.classList.add('rbactive');
});

// Fermeture du bloc d'avis lors du clic sur le bouton de fermeture
document.getElementById("closeReviewBlock").addEventListener("click", function() {
    reviewBlock.classList.remove('rbactive');
});

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA4cyypIZ4waYhyyc5ISKG8ZvuCuqhI2SM",
    authDomain: "mon-site-web-18406.firebaseapp.com",
    databaseURL: "https://mon-site-web-18406-default-rtdb.firebaseio.com",
    projectId: "mon-site-web-18406",
    storageBucket: "mon-site-web-18406.appspot.com",
    messagingSenderId: "22404925383",
    appId: "1:22404925383:web:9e545ae6278eedb90afbe2",
    measurementId: "G-8473JXKCRQ"
  };

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Référencer l'emplacement dans la base de données
const reviewsRef = ref(db, 'reviews');


// Soumission du formulaire d'avis
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const comment = document.getElementById("comment").value;
    const date = new Date().toISOString();

    // Structure de l'avis
    const newReviewRef = push(reviewsRef);
    set(newReviewRef, {
        name: name,
        rating: rating,
        comment: comment,
        date: date
    }).then(() => {
        alert('Commentaire soumis avec succès!');
        document.getElementById("reviewForm").reset();
        document.getElementById("reviewBlock").style.display = "none";
    }).catch((error) => {
        console.error('Erreur lors de la soumission du commentaire:', error);
    });
});

// Fonction pour afficher les avis depuis la base de données
function displayReviews() {
    onValue(reviewsRef, (snapshot) => {
        const reviewsList = document.getElementById("reviewsList");
        reviewsList.innerHTML = ""; // Effacer les avis précédents
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const review = childSnapshot.val();
                const date = new Date(review.date);
                const reviewHTML = `
                    <div class="review" data-id="${childSnapshot.key}">
                        <div>
                            <h4>${review.name} <small>(${date.toLocaleDateString()} ${date.toLocaleTimeString()})</small></h4>
                            <span>Évaluation: <small>${'★'.repeat(review.rating)}</small></span>
                            <p>${review.comment}</p>
                        </div>
                        <div>
                            <button class="delete-review"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                `;
                reviewsList.insertAdjacentHTML("beforeend", reviewHTML);
            });
        } else {
            const noReviewsHTML = `
                <div class="no-reviews">
                    <p>Aucun avis pour le moment!</p>
                </div>
            `;
            reviewsList.insertAdjacentHTML("beforeend", noReviewsHTML);
        }
    });
}

// Suppression d'un avis
document.getElementById("reviewsList").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-review")) {
        const reviewDiv = event.target.closest('.review');
        const id = reviewDiv.getAttribute('data-id');

        // Supprimer l'avis de la base de données
        const reviewRef = ref(db, 'reviews/' + id);
        remove(reviewRef).then(() => {
            reviewDiv.remove();
        }).catch((error) => {
            console.error('Erreur lors de la suppression du commentaire:', error);
        });
    }
});

// Charger et afficher les avis au démarrage
document.addEventListener("DOMContentLoaded", displayReviews);
