// Exercice 
// Ecrire un programme qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).

function exercice_8(){

let n;
let som = 0;
let moy = 0;
let loop = true;
let i = 1;

while (loop == true)
{
    n = window.prompt("Saisissez un nombre : ");
    console.log("Le dernier nombre saisi est : " + n);

    if ((n == 0) || (n == null) || (n == ""))
    {
        alert("Nombre nul !");
        console.log("Nombre nul !");
        loop = false;
        console.log("loop = " + loop);
        
        // On peut replacer la ligne loop = false; par :
        // break;
    }
    

    // On peut remplacer else par :
    // if ((n != 0) || (n != null) || (n != ""))
    
    else
    {
    som = Number(som) + Number(n);
    console.log("La somme actuelle des nombres saisis est : " + som);

    moy = som / i;
    console.log("La moyenne actuelle des nombres saisis est : " + moy);

    alert("La somme actuelle des nombres saisis est : " + som + "\n" 
    + "La moyenne actuelle des nombres saisis est : " + moy);

    i++;
    }
}
console.log("Fin de la boucle");


}