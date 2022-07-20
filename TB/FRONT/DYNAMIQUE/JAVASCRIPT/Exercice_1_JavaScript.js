// Exercice
// Créer un script qui demande successivement à l'utilisateur son nom puis son prénom.
// La page demande ensuite à l'utilisateur s'il est un homme ou une femme.
// Enfin, la page affiche les informations sur l'utilisateur.

function exercice_1(){

let nom = window.prompt("Saisissez votre nom");
let prenom = window.prompt("Saisissez votre prénom");

if (window.confirm("Etes-vous un homme ?") == true)
{ 
    let sexe = "Monsieur";
    window.alert("Bonjour " + sexe + " " + nom + " " + prenom); 
}
else
{
    let sexe = "Madame";
    window.alert("Bonjour " + sexe + " " + nom + " " + prenom);
}

}