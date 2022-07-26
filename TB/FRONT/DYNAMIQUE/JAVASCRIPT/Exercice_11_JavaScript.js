// Exercice 
// Créer les 2 fonctions suivantes :

// produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
// afficheImg(image) qui affiche l'image passée en paramètre. ( Le paramètre image correspond au chemin de votre image )
// Créer la page HTML correspondant au résultat ci-dessous :

// Veuillez utiliser la propriété innerHTML pour réaliser cet exercice :
// HTML DOM innerHTML

function AfficheImage(image)
{
var img = document.createElement("img");
img.src = "../JAVASCRIPT/Images/papillon.jpg";

document.getElementById("p1").innerHTML="<img src=../JAVASCRIPT/Images/papillon.jpg></img>";
return image;
}

AfficheImage();

// Ou, solution 2 :

// function afficheImg(image)
// {

// document.write('<img src= '+ image +' id="id_img_papillon" alt="image dessin papillon coloré" class="img_papillon" title="Image papillon">');

// }

// afficheImg("../JAVASCRIPT/Images/papillon.jpg");

function produit(x, y)
{

    let res = x*y;
    console.log("Le resultat est : " + res);
    
    return res;
    
}

let x = window.prompt("Saisissez un premier multiplicateur : ");
console.log("Le premier nombre saisi est : " + x);
let y = window.prompt("Saisissez un second multiplicateur : ");
console.log("Le second nombre saisi est : " + y);

produit(x, y);
console.log("Résultat : " + produit(x, y));

let p = ("<br>"+"La multiplication : " + x + " x " + y + " = " + produit(x, y));
document.getElementById("p2").innerHTML = p

// document.write("<br>"+"La multiplication : " + x + " x " + y + " = " + resultat);

