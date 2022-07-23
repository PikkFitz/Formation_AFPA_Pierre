// Exercice 
// Créer le programme qui fournira un menu permettant d’obtenir les fonctionnalités suivantes à partir d’un tableau à une dimension :

// Affichage du contenu de tous les postes du tableau,
// Affichage du contenu d’un poste dont l’index est saisi au clavier,
// Affichage du maximum et de la moyenne des postes du tableau

// Ce programme sera structuré de la manière suivante :

// une fonction GetInteger pour lire un entier au clavier,
// une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes souhaité sera entré au clavier,
// une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
// une fonction AfficheTab pour afficher tous les postes du tableau,
// une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est saisi au clavier
// une fonction InfoTab qui affichera le maximum et la moyenne des postes.
// Les fonctions seront appelées successivement.


var bouton_GetInteger = document.getElementById("Id_button_GetInteger");
bouton_GetInteger.addEventListener("click", GetInteger);

function GetInteger() {
    
    window.prompt("saisir un nombre entier : ")
    
}




var bouton_InitTab = document.getElementById("Id_button_InitTab");
bouton_InitTab.addEventListener("click", InitTab);

function InitTab(){
    
    // cell = Number(window.prompt("Entrer un nom de cellules : "));
    cell = Number(GetInteger());
    tab = new Array(cell);

    console.log("tab.length : " + tab.length);
    console.log("Le tableau contient " + cell + " cellules");
   
}

var bouton_SaisieTab = document.getElementById("Id_button_SaisieTab");
bouton_SaisieTab.addEventListener("click", SaisieTab);

function SaisieTab(){
    
    // let tableau = ["SaisieTab"];
    // window.alert(tableau);

    let i = 0;

    for (i = 0; i <= (cell-1); i++) 
    {
        tab[i] = [window.prompt("Saisissez un nombre à entrer dans le tableau : ")];   
        
        console.log("La derniere valeur rentrée est : " + tab[i]);
    }
    
    window.alert(tab);


}

var bouton_AfficheTab = document.getElementById("Id_button_AfficheTab");
bouton_AfficheTab.addEventListener("click", AfficheTab);


function AfficheTab(){
    
    // let tableau = ["AfficheTab"];
    // window.alert(tableau);



}

var bouton_RechercheTab = document.getElementById("Id_button_RechercheTab");
bouton_RechercheTab.addEventListener("click", RechercheTab);

function RechercheTab(){

    // let tableau = ["contenu_poste_specifique"];
    // window.alert(tableau);

}

var bouton_InfoTab = document.getElementById("Id_button_InfoTab");
bouton_InfoTab.addEventListener("click", InfoTab);

function InfoTab(){

    // let tableau = ["maximum_et_moyenne"];
    // window.alert(tableau);

}