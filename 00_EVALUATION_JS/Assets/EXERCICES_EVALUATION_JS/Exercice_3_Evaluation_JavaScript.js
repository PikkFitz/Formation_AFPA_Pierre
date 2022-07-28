// Exercice 3 - recherche d'un prénom

// Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

// Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. 
// Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.

//  var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// ( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )


let bouton_Ex_3_Evaluation_JS = document.getElementById("Id_button_Ex_3_Evaluation_JS");
bouton_Ex_3_Evaluation_JS.addEventListener("click", exercice_3_evaluation_js);

function exercice_3_evaluation_js()
{

let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let cell = Number(tab.length);
let loop = true;
let compteur = 0;
let find = false;

console.log("tab : " + tab);

while(loop == true)
{
    // ---------- ON RENTRE UN PRENOM ----------
    let prenom = window.prompt("Entrez un prénom : ");
    console.log("Prénom : " + prenom);

    // ---------- SI LE PRENOM EST EGALE A 0 OU "" OU ANNULER, ON QUITTE LA BOUCLE ET LA SAISIE S'ARRETE ----------
    if (prenom == 0 || prenom == "" || prenom == null)
    {
        // loop = false;
        console.log("Erreur : prénom incorrect ---> Fin du programme");
        window.alert("Erreur : prénom incorrect ---> Fin du programme");
        break;
    }
    // ---------- ON PARCOURT TOUTES LES CELLULES DU TABLEAU ----------
    for(i=0; i<=((cell-1)-Number(compteur)); i++)
    {

    // ---------- SI LE PRENOM SAISI = LE CONTENU D'UNE DES CELLULES ET EST DIFFERENT DE "" ----------
        if (tab[i]==prenom && tab[i]!="")
        {
            console.log("Prénom trouvé dans le tableau !");
            
    // ---------- DECALAGE DES CELLULES A PARTIR DE LA CELLULE CORRESPONDANTE AU PRENOM SAISI ----------
            for(i; i<=cell-2; i++)
            {
                tab[i] = tab[i+1];
            }

    // ---------- ON SUPPRIME LA DERNIERE CELLULE ET ON LA REMPLACE PAR UNE CELLULE CONTENANT "" ----------
            tab.pop();
            tab.push("");
            console.log("tab : " + tab);

            compteur++;
            find = true;
            console.log("compteur : " + compteur);
            // i=0;
            window.alert("Prénom trouvé dans le tableau !");
        }

    }
    console.log("find : " + find);

    // ---------- SI LE PRENOM SAISI N'A PAS ETE TROUVE, UN MESSAGE D'ERREUR APPARAIT----------
    if (find == false)
    {
        console.log("Erreur : prénom introuvable dans le tableau !");
        window.alert("Erreur : prénom introuvable dans le tableau !");
    }

    // ---------- SI TOUS LES PRENOMS ONT ETE TROUVES, UN MESSAGE APPARAIT ET LE PROGRAMME S'ARRETE ----------
    else if (compteur == cell)
    {
        loop = false;
        console.log("Tous les prénoms ont été trouvés, le tableau est désormais vide !");
        window.alert("Tous les prénoms ont été trouvés, le tableau est désormais vide !");
    }

    console.log("loop : " + loop);
    
    find = false;

}
console.log("Fin de boucle");

}