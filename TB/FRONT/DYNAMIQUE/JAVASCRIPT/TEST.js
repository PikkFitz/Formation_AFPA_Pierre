// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_TEST_JS= document.getElementById("Id_button_TEST_JS");
bouton_TEST_JS.addEventListener("click", test_js);

function test_js(){

    function multiplie(a, b) 
    {
       return a * b
    }


a = window.prompt("Entrer un nombre : ")   
b = window.prompt("Entrer un nombre : ")  
multiplie(a, b); 
console.log("Résultat : " + multiplie(a, b)); 
window.alert("Résultat : " + multiplie(a, b))


    
}