// Exercice
// Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair. 
// Le programme doit afficher le résultat nombre pair ou nombre impair. 
// Vous devez utiliser l'opérateur modulo % qui donne le reste d'une division. a%2 donne le reste de la division de a par 2, 
// si ce reste est égal à zéro, a est divisible par 2.

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_3_JS= document.getElementById("Id_button_Ex_3_JS");
bouton_Ex_3_JS.addEventListener("click", exercice_3_js);

function exercice_3_js(){

let n = window.prompt("Saisissez un nombre");

if (n%2==0)
{ 
    window.alert("Nombre pair"); 
}
else 
{
    window.alert("Nombre impair"); 
}

}