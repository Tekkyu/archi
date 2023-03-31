let tryAmount = 0;
let timer;

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut
    
    const password = document.querySelector('#password').value;
    
    if (tryAmount <= 3){
        if (password === '1234'){
            alert("Le mot de passe est correct");
            tryAmount = 0;
        } else {
            tryAmount++;
            alert('Mot de passe incorrect');
            if (tryAmount === 3){
                alert("Trop d'essais incorrects, merci d'attendre 10 secondes");
                let i = 10;
                timer = setInterval(() => {
                    alert(i + " secondes restantes");
                    i--;
                    if (i < 0) {
                        clearInterval(timer);
                        tryAmount = 0;
                    }
                }, 1000);
            }
        }
    } else {
        alert("Trop d'essais incorrects, merci d'attendre 10 secondes");
    }
});
