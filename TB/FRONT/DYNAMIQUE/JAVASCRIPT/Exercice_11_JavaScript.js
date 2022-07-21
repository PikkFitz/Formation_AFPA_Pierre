// Exercice 
// Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.
// Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.
// Puis votre programme doit afficher le contenu du tableau.

function exercice_11(){

let cell = Number(window.prompt("Saisissez la taille du tableau : "));
let tab = new Array(cell);
let i = 0;

window.alert("Le tableau contient " + cell + " cellules");
console.log("Le tableau contient " + cell + " cellules");
window.alert(tab.length);

for (i = 0; i <= (cell-1); i++) 
{
    tab[i] = [window.prompt("Saisissez une valeur à entrer dans le tableau : ")];   
    window.alert("La derniere valeur rentrée est : " + tab[i]);
    console.log("La derniere valeur rentrée est : " + tab[i]);
}

window.alert(tab);

}