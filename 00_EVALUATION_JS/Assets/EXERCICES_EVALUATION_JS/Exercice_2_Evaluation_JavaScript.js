// Exercice 2 - Table de multiplication

// Ecrivez une fonction qui affiche une table de multiplication.

// Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.

// Par exemple, TableMultiplication(7) doit afficher :

// 1 x 7 = 7
// 2 x 7 = 14
// 3 x 7 = 21 ...

let bouton_Ex_2_Evaluation_JS = document.getElementById("Id_button_Ex_2_Evaluation_JS");
bouton_Ex_2_Evaluation_JS.addEventListener("click", exercice_2_evaluation_js);

function exercice_2_evaluation_js(){

let n = window.prompt("Saisissez le nombre de la table de multiplication désirée : ");
console.log("Table de : " + n);
let res = 0;

for(i=0; i<=10; i++)
{
    res = n * i;
    console.log(n + " * " + i + " = " + res);
    window.alert(n + " * " + i + " = " + res);
}
console.log("Fin de la boucle");

}