// Exercice 
// Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :

// myVar.length : retourne le nombre de lettres de la chaîne myVar.
// myVar.substring(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p 
// (attention, en Javascript, le 1er caractère se trouve à la position 0)
// myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1).

function exercice_10(){

let mot = window.prompt("Saisissez un mot : ");
let voyelles ="aeiouy";
let lettre;
let compteur=0;

let longueur_mot= mot.length;

for (i=0; i<longueur_mot; i++)
{
    // var.substring(x,y) --> selectionne une partie d'une chaine de caractère (première position = 0 et non 1 !) 
    // x correspond à la première valeur à selectionner et y à la dernière (non inclue dans l'intervalle)
    // Ici, on "scanne" lettre par lettre
    lettre = mot.substring(i, i+1)   

    // var.indexOf() --> donne la position (le rang) d'une lettre, groupe de lettres ou un mot dans un texte
    if(voyelles.indexOf(lettre)!=-1)
    {        

    compteur++;

    }
}
console.log("Fin de la boucle"); 

alert("nombre de voyelles : " + compteur);

}




