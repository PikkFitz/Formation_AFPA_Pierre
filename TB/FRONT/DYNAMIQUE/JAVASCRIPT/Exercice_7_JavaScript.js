// Exercice
// Ecrire un programme qui affiche les nombres inférieurs à N.

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_7_JS= document.getElementById("Id_button_Ex_7_JS");
bouton_Ex_7_JS.addEventListener("click", exercice_7_js);

function exercice_7_js(){

let n = window.prompt("Saisissez un nombre : ");
let r;
let i = 1;

for (i=1; i<=n; i++)
{
    r = Number(n) - Number(i);

    console.log("r = " + r);

    window.alert("Les entiers inférieurs à votre nombre sont : " + r);
}
console.log("Fin de la boucle");


}