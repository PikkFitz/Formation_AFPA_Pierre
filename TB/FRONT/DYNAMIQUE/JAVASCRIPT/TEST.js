// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_TEST_JS= document.getElementById("Id_button_TEST_JS");
bouton_TEST_JS.addEventListener("click", test_js);

function test_js(){

let tab1 = 
[
    ["poireau", "tomate", "carotte"],
    ["pomme", "poire", "banane"]
];
        
alert(tab1);
    



// var monTableau = new Array(10);
// for (var i = 0; i < 10; i++)
// {
//  monTableau[i] = new Array(20);
// }
// alert(monTableau);

//On affecte une valeur de la même façon qu'on l'affiche monTableau[0][0] = Paul;


}