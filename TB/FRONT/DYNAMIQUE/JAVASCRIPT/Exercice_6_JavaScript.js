// Exercice
// Créer une page HTML qui demande à l'utilisateur un prénom.
// La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
// Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_6_JS= document.getElementById("Id_button_Ex_6_JS");
bouton_Ex_6_JS.addEventListener("click", exercice_6_js);

function exercice_6_js(){

let p = true;
let prenom;
let i = 1;

while (p == true)
{

    prenom=window.prompt("Saisissez le prénom N° " + i + " ou Clic sur Annuler pour arrêter la saisie ");

    console.log("Le nombre de prénoms saisi est : " + i + " et le dernier prénom saisi est : " + prenom);

    i++;

    if (prenom==""|| prenom==null)
    {
        alert("Prenom vide !");
        console.log("Prenom vide !");

        p=false;
    }

}
console.log("Fin de la boucle");

}