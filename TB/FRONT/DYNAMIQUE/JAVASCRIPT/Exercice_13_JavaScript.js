// Exercice 
// Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.
// Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.
// Puis votre programme doit afficher le contenu du tableau.

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_13_JS= document.getElementById("Id_button_Ex_13_JS");
bouton_Ex_13_JS.addEventListener("click", exercice_13_js);

function exercice_13_js()
{

let cell = Number(window.prompt("Saisissez la taille du tableau : "));
let tab = new Array(cell);
let i = 0;

window.alert("Le tableau contient " + cell + " cellules");
console.log("Le tableau contient " + cell + " cellules");

for (i = 0; i <= (cell-1); i++) 
{
    tab[i] = [window.prompt("Saisissez une valeur à entrer dans le tableau : ")];   
    console.log("La derniere valeur rentrée est : " + tab[i]);
}

window.alert("Tableau : " + tab);
console.log("Tableau : " + tab);

}