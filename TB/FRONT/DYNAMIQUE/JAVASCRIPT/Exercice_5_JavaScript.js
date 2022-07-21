// Exercice
// Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.
// Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
// Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_5_JS= document.getElementById("Id_button_Ex_5_JS");
bouton_Ex_5_JS.addEventListener("click", exercice_5_js);

function exercice_5_js(){

let a = window.prompt("Saisissez un premier nombre : ");
let b = window.prompt("Saisissez un second nombre : ");
let o = window.prompt("Saisissez un opérateur (+, -, * ou /) : ");
let r;

if ((o != "+") && (o != "-") && (o != "*") && (o != "/"))
{
    window.alert("Erreur d'opérateur");
}
else if ((o == "/") && (b == 0))
{
    window.alert("Division par 0");
}

if (o == "+")
{
   r = Number(a) + Number(b);
   window.alert("Résultat : " + r);
}

if (o == "-")
{
   r = Number(a) - Number(b);
   window.alert("Résultat : " + r);
}

if (o == "*")
{
   r = Number(a) * Number(b);
   window.alert("Résultat : " + r);
}

if (o == "/")
{
   r = Number(a) / Number(b);
   window.alert("Résultat : " + r);
}

}