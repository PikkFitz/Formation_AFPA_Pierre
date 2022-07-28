const option_selec = document.getElementById("id_select_environnementProjet");
option_selec.addEventListener("click", addText);
const commentText = document.getElementById("id_commentaire_environnementProjet");

const submit_button = document.getElementById("id_button_submit");
submit_button.addEventListener("click", verifForm);

const reset_button = document.getElementById("id_button_reset");
reset_button.addEventListener("click", reset);


function addText()
{
    let optText = this.options[this.selectedIndex].text;
    console.log("optText : " + optText);

    commentText.innerHTML = optText;

    if(optText == "Veuillez séléctionner un environnement projet")
    {
        commentText.innerHTML = "";
    }
    console.log("commentText : " + commentText.innerHTML);
}


function reset()
{
    commentText.innerHTML = "";
    console.log("Reset");
}


function verifForm(event)
{

// ---------- VERIF SOCIETE ----------

    let verif_societe = document.getElementById("id_societe");
    console.log("verif_societe : " + verif_societe.value);

    if (verif_societe.value == "") 
    {
        document.getElementById("id_div_societe").innerHTML = "Veuillez renseigner le nom de la société";
        id_div_societe.style.color = "red";
        event.preventDefault();
        console.log("Erreur société");
    } 

    else
    {
        let filtre_societe = new RegExp("^[\\S ]+$");
        let res_societe = filtre_societe.test(verif_societe.value);

        if (res_societe == false) 
        {
            document.getElementById("id_div_societe").innerHTML = "Nom de la société incorrect";
            id_div_societe.style.color = "red";
            event.preventDefault();
            console.log("Erreur société");
        }

        if(res_societe == true) 
        {
            document.getElementById("id_div_societe").innerHTML = "Nom de la société correct";
            id_div_societe.style.color = "green";
        }

    }

// ---------- VERIF PERSONNE A CONTACTER ----------

    let verif_personneAContacter = document.getElementById("id_personneAContacter");
    console.log("verif_personneAContacter : " + verif_personneAContacter.value);

    if (verif_personneAContacter.value == "") 
    {
        document.getElementById("id_div_personneAContacter").innerHTML = "Veuillez renseigner le nom de la personne à contacter";
        id_div_personneAContacter.style.color = "red";
        event.preventDefault();
        console.log("Erreur personne à contacter");
    } 

    else
    {
        let filtre_personneAContacter = new RegExp("^[\\S ]+$");
        let res_personneAContacter = filtre_personneAContacter.test(verif_personneAContacter.value);

        if (res_personneAContacter == false) 
        {
            document.getElementById("id_div_personneAContacter").innerHTML = "Nom de la personne à contacter incorrect";
            id_div_personneAContacter.style.color = "red";
            event.preventDefault();
            console.log("Erreur personne à contacter");
        }

        if(res_personneAContacter == true) 
        {
            document.getElementById("id_div_personneAContacter").innerHTML = "Nom de la persone à contacter correct";
            id_div_personneAContacter.style.color = "green";
        }

    }

// ---------- VERIF CODE POSTAL ----------

    let verif_codePostal = document.getElementById("id_codePostal");
    console.log("verif_codePostal : " + verif_codePostal.value);

    if (verif_codePostal.value == "") 
    {
        document.getElementById("id_div_codePostal").innerHTML = "Veuillez renseigner le code postal";
        id_div_codePostal.style.color = "red";
        event.preventDefault();
        console.log("Erreur code postal");
    } 

    else
    {
        let filtre_codePostal = new RegExp("^[0-9]{5}$");
        let res_codePostal = filtre_codePostal.test(verif_codePostal.value);

        if (res_codePostal == false) 
        {
            document.getElementById("id_div_codePostal").innerHTML = "Code postal incorrect";
            id_div_codePostal.style.color = "red";
            event.preventDefault();
            console.log("Erreur code postal");
        }

        if(res_codePostal == true) 
        {
            document.getElementById("id_div_codePostal").innerHTML = "Code postal correct";
            id_div_codePostal.style.color = "green";
        }

    }
// ---------- VERIF VILLE ----------

    let verif_ville = document.getElementById("id_ville");
    console.log("verif_ville : " + verif_ville.value);

    if (verif_ville.value == "") 
    {
        document.getElementById("id_div_ville").innerHTML = "Veuillez renseigner la ville";
        id_div_ville.style.color = "red";
        event.preventDefault();
        console.log("Erreur ville");
    } 

    else
    {
        let filtre_ville = new RegExp("^[\\S ]+$");
        let res_ville = filtre_ville.test(verif_ville.value);

        if (res_ville == false) 
        {
            document.getElementById("id_div_ville").innerHTML = "Ville incorrect";
            id_div_ville.style.color = "red";
            event.preventDefault();
            console.log("Erreur ville");
        }

        if(res_ville == true) 
        {
            document.getElementById("id_div_ville").innerHTML = "Ville correct";
            id_div_ville.style.color = "green";
        }

    }

    // ---------- VERIF EMAIL ----------

    let verif_email = document.getElementById("id_email");
    console.log("verif_email : " + verif_email.value);

    if (verif_email.value == "") 
    {
        document.getElementById("id_div_email").innerHTML = "Veuillez renseigner l'email";
        id_div_email.style.color = "red";
        event.preventDefault();
        console.log("Erreur email");
    } 

    else
    {
        let filtre_email = new RegExp("^[\\S ]*[@]+[\\S ]*$");
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
            document.getElementById("id_div_email").innerHTML = "Email correct";
            id_div_email.style.color = "green";
        }

    }

}