function exercice_6(){

let p = true;
let prenom;
i = 1

while (p == true)
{

    prenom=window.prompt("Saisissez le prénom N° " + i + " ou Clic sur Annuler pour arrêter la saisie ")

    console.log("Le nombre de prénoms saisi est : " + i + " et le dernier prénom saisi est : " + prenom);

    i++

    if (prenom==""||prenom==null)
    {
        alert("Prenom vide !");
        console.log("Prenom vide !");

        p=false;
    }

}
console.log("Fin de la boucle");

}