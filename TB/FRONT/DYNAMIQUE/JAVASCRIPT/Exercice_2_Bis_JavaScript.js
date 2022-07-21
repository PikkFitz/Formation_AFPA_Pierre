// Exercice
// Soit les variables suivantes :

// a qui contient la chaîne de caractères 100
// b = 100
// c qui contient la valeur 1,00
// d booléen qui vaut vrai
// A réaliser :

// Affichez "Ceci est une chaîne de caractères :" et concaténez cette chaîne avec la variable a pour afficher "Ceci est une chaîne de caractères : 100".
// Appliquez à b l'opérateur de décrémentation
// Ajoutez à c la valeur de a
// Inversez la valeur de d

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_2_Bis_JS= document.getElementById("Id_button_Ex_2_Bis_JS");
bouton_Ex_2_Bis_JS.addEventListener("click", exercice_2_bis_js);

function exercice_2_bis_js(){

let a = "100";
let b = 100;
let c = 1.00;
let d = true;

document.write("Ceci est une chaîne de caractères : " + a +"<br>");

b--;
document.write(b +"<br>");

c += a;
document.write(c +"<br>");

d =! d;
document.write(d +"<br>")

}
