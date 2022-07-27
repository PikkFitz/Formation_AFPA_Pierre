// Exercice 4 - total d'une commande

// A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, 
// afficher le prix à payer PAP, en détaillant la remise REM et le port PORT, sachant que :

// TOT = ( PU * QTECOM )
// la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
// le port est gratuit si le prix des produits ( le total remisé ) est supérieur à 500 €. Dans le cas contraire, le port est de 2%
// la valeur minimale du port à payer est de 6 €
// Testez tous les cas possibles afin de vous assurez que votre script fonctionne.

// Ci-dessous, un jeu de tests :

// Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00 et frais port = 0; à payer : 540 €
// Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.
// Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 € et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €
// Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 € donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €

var bouton_Ex_4_Evaluation_JS = document.getElementById("Id_button_Ex_4_Evaluation_JS");
bouton_Ex_4_Evaluation_JS.addEventListener("click", exercice_4_evaluation_js);

function exercice_4_evaluation_js()
{
let PU = window.prompt("Veuillez entrer le prix unitaire : ");
let QTECOM = window.prompt("Veuillez entrer la quantité commandée : ");

let TOT = Number(PU) * Number(QTECOM);

let RemiseP;
let RemiseN = 0;


if (TOT >= 100 && TOT < 200)
{
    RemiseP = "5%";
    RemiseN = 0.05;
}

else if (TOT >= 200)
{
    RemiseP = "10%";
    RemiseN = 0.10;
}

else if (TOT < 100)
{
    RemiseP = "0%";
    RemiseN = 0;
}

let REM = Number(TOT) * Number(RemiseN);
let TOTREM = Number(TOT) - Number(REM);

let PortP = 0;
let PortN = 0;
let PORT = 0;
const PortMin = 6;

if (TOTREM > 500)
{
    PortP = "Gratuits"
    PORT = 0;
}
else if (TOTREM <= 500)
{
    PortP = "2%"
    PortN = 0.02;
    PORT = Number(PortN) * Number(TOTREM);

    if (PORT < 6)
    {
        PortP = "Frais de port minimaux"
        PORT = Number(PortMin)
    }
}

let PAP = Number(TOTREM) + Number(PORT);

console.log("Prix unitaire : " + PU + "€\n" +
            "Quantité commandée : " + QTECOM + "\n" +
            "Prix total : " + TOT + "€\n" +
            "Remise : " + RemiseP + ", soit " + REM + "€\n" +
            "Frais de port : " + PortP + ", soit " + PORT + "€\n" + 
            "Prix à payer : " + PAP + "€")

}