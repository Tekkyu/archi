const apiUrl = 'data.html';

const dataElement = document.getElementById('data');
const refreshButton = document.getElementById('refresh-button');

function getApiData() {
  fetch(apiUrl)
    .then(response => response.text())//on transforme le resultat recu en format json
    .then(data => {
      dataElement.innerHTML = data;
    })
    .catch(error => console.error(error));
}

refreshButton.addEventListener('click', () => { //quand on clique sur le bouton, on récupere de nouvelles données
  getApiData();
});

getApiData();//déclanche la fonction au chargement de la page
