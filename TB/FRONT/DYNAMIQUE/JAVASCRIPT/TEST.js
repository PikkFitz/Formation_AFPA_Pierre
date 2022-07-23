// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_TEST_JS= document.getElementById("Id_button_TEST_JS");
bouton_TEST_JS.addEventListener("click", test_js);

function test_js(){

    function multiplie(a, b) 
    {
       return a * b
    }

a = window.prompt("Entrer le multiplicateur a : ");  
console.log("Multiplicateur a : " + a);  
b = window.prompt("Entrer le multiplicateur b : ");
console.log("Multiplicateur b : " + b);   
resultat = multiplie(a, b); 
console.log("Résultat : " + resultat); 
window.alert("Résultat : " + resultat);

// console.log("Résultat : " + multiplie(a, b)); 
// window.alert("Résultat : " + multiplie(a, b));


    
}