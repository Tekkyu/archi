// Récupérer l'élément <p> par son ID
const dateElement = document.getElementById("date");

// Créer un objet Date pour la date d'aujourd'hui
const date = new Date();

// Afficher la date dans l'élément <p>
dateElement.textContent = date.toLocaleDateString();

// Récupérer l'élément <div> par son ID
const hideElement = document.getElementById("hide");

// Récupérer le bouton par son ID
const hideButton = document.getElementById("hideButton");

// Ajouter un écouteur d'événements pour le clic sur le bouton
hideButton.addEventListener("click", function() {
  if (hideElement.style.display === "none") {
    // Si l'élément est masqué, l'afficher
    hideElement.style.display = "block";
  } else {
    // Sinon, le masquer
    hideElement.style.display = "none";
  }
});
