// Exercice
// Ecrire un programme qui affiche les nombres inférieurs à N.

function exercice_7(){

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