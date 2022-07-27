// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux

// Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, 
// les personnes d'âge strictement supérieur à 40 ans 
// et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

// Le programme doit demander les âges successifs.

// Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

// Donnez le programme Javascript correspondant qui affiche les résultats.

let bouton_Ex_1_Evaluation_JS = document.getElementById("Id_button_Ex_1_Evaluation_JS");
bouton_Ex_1_Evaluation_JS.addEventListener("click", exercice_1_evaluation_js);

function exercice_1_evaluation_js(){

let age = 0;
let inf20 = 0;
let entre20Et40 = 0;
let sup40 = 0;
let supOuEgal100 = 0;
let loop = true;

while(loop == true)
{

    age = window.prompt("Saisissez un age : ");
    console.log("Age : " + age);

    if (age < 20)
    { 
        inf20++;
        console.log("Personne(s) de moins de 20 ans : " + inf20);
    }

    else if (age>=20 && age<=40)
    {
        entre20Et40++;
        console.log("Personne(s) entre 20 ans et 40 ans : " + entre20Et40);
    }

    else if (age>40 && age<100)
    {
        sup40++;
        console.log("Personne(s) de plus de 40 ans : " + sup40);
    }

    else if (age>=100)
    {
        supOuEgal100++;
        loop = false;
        console.log("Personne de plus de 100 ans : " + supOuEgal100);
    }

}
console.log("Fin de la boucle");

console.log("Personne(s) de moins de 20 ans : " + inf20 + "\n" +
            "Personne(s) entre 20 ans et 40 ans : " + entre20Et40 + "\n" +
            "Personne(s) de plus de 40 ans : " + sup40 + "\n" +
            "Personne de plus de 100 ans : " + supOuEgal100);

window.alert("Personne(s) de moins de 20 ans : " + inf20 + "\n" +
            "Personne(s) entre 20 ans et 40 ans : " + entre20Et40 + "\n" +
            "Personne(s) de plus de 40 ans : " + sup40 + "\n" +
            "Personne de plus de 100 ans : " + supOuEgal100);

}