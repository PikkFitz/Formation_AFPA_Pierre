// Exercice
// Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair. 
// Le programme doit afficher le résultat nombre pair ou nombre impair. 
// Vous devez utiliser l'opérateur modulo % qui donne le reste d'une division. a%2 donne le reste de la division de a par 2, 
// si ce reste est égal à zéro, a est divisible par 2.

function exercice_3(){

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