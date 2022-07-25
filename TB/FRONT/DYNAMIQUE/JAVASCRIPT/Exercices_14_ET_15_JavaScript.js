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


// var bouton_GetInteger = document.getElementById("Id_button_GetInteger");
// bouton_GetInteger.addEventListener("click", GetInteger);

// function GetInteger() {
    
//    return Number(window.prompt("saisir un nombre entier : "));

// }


// ---------- SAISIR LE NOMBRE DE CELLULES DU TABLEAU ----------

var bouton_InitTab = document.getElementById("Id_button_InitTab");
bouton_InitTab.addEventListener("click", InitTab);

function InitTab(){

    cell = Number(window.prompt("Saisir le nombre de cellules du tableau : "));
    console.log("cell : " + cell);
    tab = new Array(cell);

    console.log("tab.length : " + tab.length);
    console.log("Le tableau contient " + cell + " cellules");
    window.alert("Le tableau contient " + cell + " cellules");
   
}

// ---------- SAISIR LES CELLULES DU TABLEAU MANUELLEMENT ----------

var bouton_SaisieTab = document.getElementById("Id_button_SaisieTab");
bouton_SaisieTab.addEventListener("click", SaisieTab);

function SaisieTab(){

    for (i = 0; i <= (cell-1); i++) 
    {
        tab[i] = [window.prompt("Saisissez un nombre à entrer dans la cellule " + (Number(i) + Number(1)) + " du tableau : ")];   
        
        console.log("La derniere valeur rentrée est : " + tab[i]);
    }
    
    console.log("Tableau : " + tab);
    window.alert("Tableau : " + tab);

}

// ---------- REMPLIR LE TABLEAU AVEC DES VALEURS ALEATOIRES ----------

var bouton_TabAlt = document.getElementById("Id_button_TabAlt");
bouton_TabAlt.addEventListener("click", TabAlt);

function TabAlt(){

    for (i = 0; i <= (cell-1); i++) 
    {
        // Math.floor(Math.random() * (max - min + 1)) + min   ---> Générer un nombre aléatoire entier
        tab[i] = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
        
        console.log("La derniere valeur rentrée est : " + tab[i]);
    }
    
    console.log("Tableau : " + tab);
    window.alert("Tableau : " + tab);

}

// ---------- REALISER UN TRI A BULLES DU TABLEAU ----------

var bouton_TriBulles = document.getElementById("Id_button_TriBulles");
bouton_TriBulles.addEventListener("click", TriBulles);

function TriBulles(){

    let swap = false;

    for(i =0; i <= (cell-1); i++)
    {
        swap = false;
          
        for(j = 0; j <= (cell-1); j++)
        {

            if(tab[j] > tab[j + 1])
            {
              let temp = Number(tab[j]);
              tab[j] = Number(tab[j+1]);
              tab[j+1] = Number(temp);
              swap = true;
            }

        }
    
    // Dans ce cas, !swap équivaut à swap != true ou swap = false

        if(!swap)
        {
          break;
        }

    }
        
    console.log("Tableau : " + tab)
    window.alert("Tableau : " + tab);
    
}

// ---------- AFFICHER TOUTES LES CELLULES DU TABLEAU ----------

var bouton_AfficheTab = document.getElementById("Id_button_AfficheTab");
bouton_AfficheTab.addEventListener("click", AfficheTab);

function AfficheTab(){
    
    window.alert("Tableau : " + tab);

}

// ---------- AFFICHER LE CONTENU D'UNE CELLULE SPECIFIQUE ----------

var bouton_RechercheTab = document.getElementById("Id_button_RechercheTab");
bouton_RechercheTab.addEventListener("click", RechercheTab);

function RechercheTab(){

    ncell = window.prompt("Saisir le numéro de la cellule du tableau à afficher : ")
    console.log("Cellule n° " + ncell + " : " + tab[ncell-1]);
    window.alert("Cellule n° " + ncell + " : " + tab[ncell-1]);

    if ((ncell < 1) || (ncell > tab.length))
    {
        console.log("Erreur : Cellule introuvable, n° de cellule hors du tableau");
        window.alert("Erreur : Cellule introuvable, n° de cellule hors du tableau");
    }

}

// ---------- AFFICHER LE MINIMUM, LE MAXIMUM ET LA MOYENNE DES CELLULES DU TABLEAU ----------

var bouton_InfoTab = document.getElementById("Id_button_InfoTab");
bouton_InfoTab.addEventListener("click", InfoTab);

function InfoTab(){

    let som = 0;

    for (i = 0; i <= (cell-1); i++) 
    {

        som = Number(som) + Number(tab[i]);
        console.log("Somme = " + som);
       
    }

    let moy = (Number(som) / Number(cell));
    console.log("Moyenne : " + moy);

    let min = Math.min(...tab);
    console.log("Minimum : " + min);

    let max = Math.max(...tab);
    console.log("Maximum : " + max);

    console.log("Minimum : " + min + "\n" +
                "Maximum : " + max + "\n" +
                "Moyenne : " + moy);

    window.alert("Minimum : " + min + "\n" +
                 "Maximum : " + max + "\n" +
                 "Moyenne : " + moy);

}