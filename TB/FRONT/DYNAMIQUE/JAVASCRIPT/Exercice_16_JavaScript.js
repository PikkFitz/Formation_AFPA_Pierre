// Exercice 

// Ecrivez un programme permettant de saisir différentes valeurs numérique (avec l'instruction window.prompt), ces valeurs seront rangées dans un tableau.

// La saisie s'arrête quand l'utilisateur entre la valeur 0.

// A la fin de la saisie, votre programme doit afficher le nombre de valeurs saisies, la somme et la moyenne.

var bouton_Ex_16_JS= document.getElementById("Id_button_Ex_16_JS");
bouton_Ex_16_JS.addEventListener("click", exercice_16_js);

function exercice_16_js(){

let loop = true;
let tab = [];
let i = 0;

while (loop == true)
{

    let input = window.prompt("Entrer un nombre : ");

    if ((input == null) || (input == 0) || (input == ""))
    {
        loop = false;
        console.log("Nombre nul !");
        console.log("loop = " + loop);
        alert("Nombre nul !");
        break
    }

    tab[i] = input;
    
    console.log("tab["+i+"] : " + tab[i]);

    i++;

}

console.log("Tableau : " + tab);
console.log("Vous avez saisi : " + tab.length + " valeurs")

let som = 0;

    for (i = 0; i <= (tab.length-1); i++) 
    {

        som = Number(som) + Number(tab[i]);
        console.log("Somme = " + som);
       
    }

let moy = (Number(som) / Number(tab.length));
    console.log("Moyenne : " + moy);

console.log("Vous avez saisi : " + tab.length + " valeurs" + "\n" +
            "Somme : " + som + "\n" +
            "Moyenne : " + moy)

window.alert("Vous avez saisi : " + tab.length + " valeurs" + "\n" +
             "Somme : " + som + "\n" +
             "Moyenne : " + moy)


    



   
         

}