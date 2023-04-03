const email = document.getElementById('email');
let Code = 0;
const ShowResult = document.getElementById("results");

function Hidesignup() {
const Signup = document.getElementById("signup");
    Signup.style.display = "none";
}
function ShowResults() {
    ShowResult.style.display = "block";
    }

    
form.addEventListener('submit', (event) => {
    alert(email.value);
    Hidesignup()
    ShowResults()
    event.preventDefault();
    fetch(`http://10.5.40.8/archi/api.php?email=${email.value}`)
    .then(response => response.json())
    .then(data => {
        Code = data;
        console.log (data);
        switch (Code) {
            case 0:
                ShowResult.innerHTML = "Erreur code 0 : La connexion avec le serveur API n'a pas aboutie."
                break;
            case 1:
                ShowResult.innerHTML = "L'email a été ajouté !"
                break;
            case 2:
                ShowResult.innerHTML = "L'email existe déja !"
            default:
                break;
        }}
      )

    
})