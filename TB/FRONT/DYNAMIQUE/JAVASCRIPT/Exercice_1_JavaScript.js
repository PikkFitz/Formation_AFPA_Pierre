// Exercice
// Créer un script qui demande successivement à l'utilisateur son nom puis son prénom.
// La page demande ensuite à l'utilisateur s'il est un homme ou une femme.
// Enfin, la page affiche les informations sur l'utilisateur.

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_1_JS= document.getElementById("Id_button_Ex_1_JS");
bouton_Ex_1_JS.addEventListener("click", exercice_1_js);

function exercice_1_js(){

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