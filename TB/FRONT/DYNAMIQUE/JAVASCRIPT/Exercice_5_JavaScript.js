// Exercice
// Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.
// Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
// Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.

function exercice_5(){

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