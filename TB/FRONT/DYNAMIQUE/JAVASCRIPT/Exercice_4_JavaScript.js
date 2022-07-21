// Exercice
// Ecrivez un programme qui demande l'année de naissance à l'utilisateur. 
// En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur ou mineur.

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_4_JS= document.getElementById("Id_button_Ex_4_JS");
bouton_Ex_4_JS.addEventListener("click", exercice_4_js);

function exercice_4_js(){

let y = 2022
let age
let a = window.prompt("Saisissez votre année de naissance : ");

age = y-a

if (age<18)
{
    window.alert("Vous avez : " + age + " ans et êtes mineur");
}
else
{
    window.alert("Vous avez : " + age + " ans et êtes majeur");
}

}