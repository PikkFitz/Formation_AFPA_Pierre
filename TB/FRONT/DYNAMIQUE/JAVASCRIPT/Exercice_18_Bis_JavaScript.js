// Exercice

// Votre programme doit générer un nombre aléatoire à l'aide de la fonction Math.random.

// Ecrivez la fonction verif() qui doit vérifier si la saisie de l'utilisateur (dans textBox1) correspond au nombre magique, 
// elle affiche des informations, trop grand, trop petit dans le label1.

const reponses = document.querySelector(".reponses");
const dernierResultat = document.querySelector(".dernierResultat");
const tropHautOuTropBas = document.getElementById("label1");
const textBox = document.getElementById("textBox1");
const button = document.getElementById("button1");

const resetButton = document.createElement("button");
    resetButton.textContent = "Reset game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", reset);



function nAlt(){

    
    // Math.floor(Math.random() * (max - min + 1)) + min   ---> Générer un nombre entier aléatoire 
    n = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        
    console.log("La valeur de n est : " + n);

}

nAlt()

reponses.textContent = "Réponse(s) précédente(s) : ";


function verif()
{

    const reponseUtilisateur = Number(textBox.value);
    
    reponses.textContent += reponseUtilisateur + " ";

    if (reponseUtilisateur === n) 
    {
        dernierResultat.textContent = "Félicitations ! Vous avez trouvé le bon nombre !";
        dernierResultat.style.backgroundColor = "green";
        tropHautOuTropBas.textContent = "";
    } 
    
    else 
    {
        dernierResultat.textContent = "Faux !";
        dernierResultat.style.backgroundColor = "red";

            if(reponseUtilisateur < n) 
            {
                tropHautOuTropBas.textContent = "Votre réponse est trop basse !" ;
                tropHautOuTropBas.style.color = "red" ;
            }    

            else if(reponseUtilisateur > n) 
            {
                tropHautOuTropBas.textContent = "Votre réponse est trop haute !";
                tropHautOuTropBas.style.color = "red" ;
            }
    }

    textBox.value = "";
    textBox.focus();

}

button.addEventListener("click", verif);

function reset() 
{
    const resetParametres = document.querySelectorAll(".parametres p");

    for (const resetParametre of resetParametres) 
    {
      resetParametre.textContent = "";
    }

    textBox.value = "";
    textBox.focus();
    dernierResultat.style.backgroundColor = "white";
    nAlt()
    
  }