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

function exercice_2(){

let a = "100";
let b = 100;
let c = 1.00;
let d = true;

window.alert("Ceci est une chaîne de caractères : " + a);

b--;
window.alert(b);

c += a;
window.alert(c);

d =! d;
window.alert(d)

}