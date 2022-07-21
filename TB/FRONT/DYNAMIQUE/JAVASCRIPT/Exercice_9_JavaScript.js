// Exercice 
// Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.

// Exemple pour N=5 et X=7 :

// 1 x 7 = 7
// 2 x 7 = 14
// 3 x 7 = 21
// 4 x 7 = 28
// 5 x 7 = 35

// Il est demandé de choisir la structure répétitive (for, while, do...while) la mieux appropriée au problème.

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_9_JS= document.getElementById("Id_button_Ex_9_JS");
bouton_Ex_9_JS.addEventListener("click", exercice_9_js);

function exercice_9_js(){

let n = window.prompt("Saisissez un nombre : ");
let x = window.prompt("Saisissez le nombre de premiers multiples désirés du nombre précédent : ");
let res;
let i = 1;

for (i=1; i<=x; i++)
    {
        res = Number(n) * Number(i);
        console.log(n + " * " + i + " = " + res);
    
        window.alert(n + " * " + i + " = " + res);
    }
console.log("Fin de la boucle"); 

}