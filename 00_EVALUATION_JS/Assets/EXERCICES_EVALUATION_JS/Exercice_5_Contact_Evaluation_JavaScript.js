const submit_button = document.getElementById("id_button_submit");
submit_button.addEventListener("click", verifForm);

function verifForm(event)
{

// ---------- VERIF NOM ----------

    let verif_nom = document.getElementById("id_nom");
    console.log("verif_nom : " + verif_nom.value);

    if (verif_nom.value == "") 
    {
        document.getElementById("id_div_nom").innerHTML = "Veuillez renseigner votre nom";
        id_div_nom.style.color = "red";
        event.preventDefault();
        console.log("Erreur nom");
    } 

    else
    {
        let filtre_nom = new RegExp("^[a-zA-Z -'éèçù]+$");
        let res_nom = filtre_nom.test(verif_nom.value);

        if (res_nom == false) 
        {
            document.getElementById("id_div_nom").innerHTML = "Nom incorrect";
            id_div_nom.style.color = "red";
            event.preventDefault();
            console.log("Erreur nom");
        }

        if(res_nom == true) 
        {
            document.getElementById("id_div_nom").innerHTML = "Nom correct";
            id_div_nom.style.color = "green";
        }

    }


    // ---------- VERIF PRENOM ----------

    let verif_prenom = document.getElementById("id_prenom");
    console.log("verif_prenom : " + verif_prenom.value);

    if (verif_prenom.value == "") 
    {
        document.getElementById("id_div_prenom").innerHTML = "Veuillez renseigner votre prenom";
        id_div_prenom.style.color = "red";
        event.preventDefault();
        console.log("Erreur prenom");
    } 

    else
    {
        let filtre_prenom = new RegExp("^[a-zA-Z -'éèçù]+$");
        let res_prenom = filtre_prenom.test(verif_prenom.value);

        if (res_prenom == false) 
        {
            document.getElementById("id_div_prenom").innerHTML = "Prenom incorrect";
            id_div_prenom.style.color = "red";
            event.preventDefault();
            console.log("Erreur prenom");
        }

        if(res_prenom == true) 
        {
            document.getElementById("id_div_prenom").innerHTML = "Prenom correct";
            id_div_prenom.style.color = "green";
        }

    }


    //   ---------- VERIF SEXE (BOUTONS RADIO) ----------

    let verif_sexeF = document.getElementById("id_sexeF");

    let verif_sexeM = document.getElementById("id_sexeM");
    
    if (verif_sexeF.checked || verif_sexeM.checked) 
    {
        document.getElementById("id_div_sexe").innerHTML = "Sexe correct";
        id_div_sexe.style.color = "green";
    } 
      
    else 
    {
        document.getElementById("id_div_sexe").innerHTML = "Veuillez cocher la case correspondant à votre sexe";
        id_div_sexe.style.color = "red";
        event.preventDefault();
        console.log("Erreur sexe");
    }

///////////////////////////////////////////////////////////////////////
///////////////////////////     ici                 /////////////////
///////////////////////////////////////////////////////////////////////


// // ---------- VERIF DATE ----------

// let verif_date = document.getElementById("id_date");
// console.log("verif_date : " + verif_date.value);

// if (verif_date.value == "") 
// {
//     document.getElementById("id_div_date").innerHTML = "Veuillez renseigner votre date de naissance";
//     id_div_date.style.color = "red";
//     event.preventDefault();
//     console.log("Erreur date");
// } 


// //|(200[\d])|(201[\d])|(202[012])[-]0[1-9]|1[012][-]0[1-9]|1[0-9]|2[0-9]|3[01]

// else
// {
//     // ATTENTION !!! DATES SOUS LE FORMAT AAAA-MM-DD

//     // let filtre_date = new RegExp("^0[1-9]{1}|1[0-9]{1}|2[0-9]{1}|3[01]{1}/0[1-9]{1}|1[012]{1}/19[0-9]{1}[0-9]{1}|200[0-9]{1}|201[0-9]{1}|202[012]{1}$");

//     // let filtre_date = new RegExp("^19[0-9]{1}[0-9]{1}|200[0-9]{1}|201[0-9]{1}|202[012]{1}/0[1-9]{1}|1[012]{1}/0[1-9]{1}|1[0-9]{1}|2[0-9]{1}|3[01]{1}$");

//     let filtre_date = new RegExp("^19[0-9]{1}[0-9]{1}|200[0-9]{1}|201[0-9]{1}|202[012]{1}-0[1-9]{1}|1[012]{1}-0[1-9]{1}|1[0-9]{1}|2[0-9]{1}|3[01]{1}$");

//     let res_date = filtre_date.test(verif_date.value);

//     if (res_date == false) 
//     {
//         document.getElementById("id_div_date").innerHTML = "Date incorrect";
//         id_div_date.style.color = "red";
//         event.preventDefault();
//         console.log("Erreur date");
//     }

//     if(res_date == true) 
//     {
//         document.getElementById("id_div_date").innerHTML = "Date correct";
//         id_div_date.style.color = "green";
//     }

// }







//     //   else
//     //   {
//     //       let filtre_prenom = new RegExp("^[a-zA-Z -'éèçù]+$");
//     //       let res_prenom = filtre_prenom.test(verif_prenom.value);
  
//     //       if (res_prenom == false) 
//     //       {
//     //           document.getElementById("id_div_prenom").innerHTML = "Prenom incorrect";
//     //           id_div_prenom.style.color = "red";
//     //           event.preventDefault();
//     //           console.log("Erreur prenom");
//     //       }
  
//     //       if(res_prenom == true) 
//     //       {
//     //           document.getElementById("id_div_prenom").innerHTML = "Prenom correct";
//     //           id_div_prenom.style.color = "green";
//     //       }
  
//     //   }



//////////////////////////////////////      la     ///////////////////////////////////////

}