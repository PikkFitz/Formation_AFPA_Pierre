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
        document.getElementById("id_div_nom").innerHTML = "Nom OK";
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
    let filtre_prenom = new RegExp("^[a-zA-Z -'éèçùïëä]+$");
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
        document.getElementById("id_div_prenom").innerHTML = "Prenom OK";
        id_div_prenom.style.color = "green";
    }

}


//   ---------- VERIF SEXE (BOUTONS RADIO) ----------

let verif_sexeF = document.getElementById("id_sexeF");
let verif_sexeM = document.getElementById("id_sexeM");
    
if (verif_sexeF.checked || verif_sexeM.checked) 
{
    document.getElementById("id_div_sexe").innerHTML = "Sexe OK";
    id_div_sexe.style.color = "green";
} 
      
else 
{
    document.getElementById("id_div_sexe").innerHTML = "Veuillez cocher la case correspondant à votre sexe";
    id_div_sexe.style.color = "red";
    event.preventDefault();
    console.log("Erreur sexe");
}


// ---------- VERIF DATE ----------

let verif_date = document.getElementById("id_date");
console.log("verif_date : " + verif_date.value);

if (verif_date.value == "") 
{
    document.getElementById("id_div_date").innerHTML = "Veuillez renseigner votre date de naissance";
    id_div_date.style.color = "red";
    event.preventDefault();
    console.log("Erreur date");
} 

else
{
// ATTENTION !!! DATES SOUS LE FORMAT AAAA-MM-DD !!!

    let filtre_date = new RegExp("^(19[0-9][0-9]|200[0-9]|201[0-9]|202[012])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$");

    let res_date = filtre_date.test(verif_date.value);

    if (res_date == false) 
    {
        document.getElementById("id_div_date").innerHTML = "Date incorrecte";
        id_div_date.style.color = "red";
        event.preventDefault();
        console.log("Erreur date");
    }

    if (res_date == true) 
    {
        document.getElementById("id_div_date").innerHTML = "Date OK";
        id_div_date.style.color = "green";
    }

}


// ---------- VERIF CODE POSTAL ----------

let verif_cp = document.getElementById("id_cp");
console.log("verif_cp : " + verif_cp.value);
 
if (verif_cp.value == "") 
{
    document.getElementById("id_div_cp").innerHTML = "Veuillez renseigner votre code postal";
    id_div_cp.style.color = "red";
    event.preventDefault();
    console.log("Erreur code postal");
} 
 
else
{
    let filtre_cp = new RegExp("^[\\d]{5}$");
    let res_cp = filtre_cp.test(verif_cp.value);
 
    if (res_cp == false) 
    {
        document.getElementById("id_div_cp").innerHTML = "Code postal incorrect";
        id_div_cp.style.color = "red";
        event.preventDefault();
        console.log("Erreur code postal");
    }
 
    if(res_cp == true) 
    {
        document.getElementById("id_div_cp").innerHTML = "Code postal OK";
        id_div_cp.style.color = "green";
    }
 
}


// ---------- VERIF ADRESSE ----------

let verif_adresse = document.getElementById("id_adresse");
console.log("verif_adresse : " + verif_adresse.value);

if (verif_adresse.value == "") 
{
     document.getElementById("id_div_adresse").innerHTML = "Veuillez renseigner votre adresse";
    id_div_adresse.style.color = "red";
    event.preventDefault();
    console.log("Erreur adresse");
} 

else
{
    let filtre_adresse = new RegExp("^[\\S ]+$");
    let res_adresse = filtre_adresse.test(verif_adresse.value);

    if (res_adresse == false) 
    {
        document.getElementById("id_div_adresse").innerHTML = "Adresse incorrecte";
        id_div_adresse.style.color = "red";
        event.preventDefault();
        console.log("Erreur adresse");
    }

    if(res_adresse == true) 
    {
        document.getElementById("id_div_adresse").innerHTML = "Adresse OK";
        id_div_adresse.style.color = "green";
    }

}


// ---------- VERIF VILLE ----------

let verif_ville = document.getElementById("id_ville");
console.log("verif_ville : " + verif_ville.value);

if (verif_ville.value == "") 
{
    document.getElementById("id_div_ville").innerHTML = "Veuillez renseigner votre ville";
    id_div_ville.style.color = "red";
    event.preventDefault();
    console.log("Erreur ville");
} 

else
{
    let filtre_ville = new RegExp("^[\\D]+$");
    let res_ville = filtre_ville.test(verif_ville.value);

    if (res_ville == false) 
    {
        document.getElementById("id_div_ville").innerHTML = "Ville incorrecte";
        id_div_ville.style.color = "red";
        event.preventDefault();
        console.log("Erreur ville");
    }

    if(res_ville == true) 
    {
        document.getElementById("id_div_ville").innerHTML = "Ville OK";
        id_div_ville.style.color = "green";
    }

}


// ---------- VERIF EMAIL ----------

let verif_email = document.getElementById("id_email");
console.log("verif_email : " + verif_email.value);

if (verif_email.value == "") 
{
    document.getElementById("id_div_email").innerHTML = "Veuillez renseigner votre email";
    id_div_email.style.color = "red";
    event.preventDefault();
    console.log("Erreur email");
} 

else
{
    //                            "^[a-z0-9_.-]+[a-z0-9]+@[a-z0-9_.-]+[a-z0-9]+[\.][a-z]{2,4}$"
    let filtre_email = new RegExp("^[a-z0-9_.-]+[a-z0-9]+@[a-z0-9_.-]+[a-z0-9]+[\.][a-z]{2,4}$");
    let res_email = filtre_email.test(verif_email.value);

    if (res_email == false) 
    {
        document.getElementById("id_div_email").innerHTML = "Email incorrect";
        id_div_email.style.color = "red";
        event.preventDefault();
        console.log("Erreur email");
    }

    if(res_email == true) 
    {
        document.getElementById("id_div_email").innerHTML = "Email OK";
        id_div_email.style.color = "green";
    }

}


//   ---------- VERIF SUJET ----------

let verif_sujet = document.getElementById("id_select_sujet").selectedIndex;

console.log("verif_sujet : " + verif_sujet)

if (verif_sujet != 0) 
{
    document.getElementById("id_div_sujet").innerHTML = "Sujet OK";
    id_div_sujet.style.color = "green";
} 
  
else 
{
    document.getElementById("id_div_sujet").innerHTML = "Veuillez sélectionner un sujet";
    id_div_sujet.style.color = "red";
    event.preventDefault();
    console.log("Erreur sujet");
}


// ---------- VERIF QUESTION ----------

let verif_question = document.getElementById("id_question");
console.log("verif_question : " + verif_question.value);

if (verif_question.value == "") 
{
    document.getElementById("id_div_question").innerHTML = "Veuillez écrire votre question";
    id_div_question.style.color = "red";
    event.preventDefault();
    console.log("Erreur question");
} 

else
{
    let filtre_question = new RegExp("^[\\S ]+$");
    let res_question = filtre_question.test(verif_question.value);

    if (res_question == false) 
    {
        document.getElementById("id_div_question").innerHTML = "Question incorrecte";
        id_div_question.style.color = "red";
        event.preventDefault();
        console.log("Erreur question");
    }

    if(res_question == true) 
    {
        document.getElementById("id_div_question").innerHTML = "Question OK";
        id_div_question.style.color = "green";
    }

}

//   ---------- VERIF CHECKBOX ----------

let verif_checkbox = document.getElementById("id_checkbox").checked;

console.log("verif_checkbox : " + verif_checkbox)

if (verif_checkbox == true) 
{
    document.getElementById("id_div_checkbox").innerHTML = "Checkbox OK";
    id_div_checkbox.style.color = "green";
} 
  
else 
{
    document.getElementById("id_div_checkbox").innerHTML = "Veuillez cocher cette case";
    id_div_checkbox.style.color = "red";
    event.preventDefault();
    console.log("Erreur checkbox");
}

}

