//alert("js ok !");


var bouton_envoyer = document.getElementById("go");
bouton_envoyer.addEventListener("click", verif_form);






function verif_form(e) {

    //alert("ok nous sommes dans la fonction verif_form !");

    var nom = document.getElementById("toto");

    if (nom.value == "") {

        alert("Veuillez renseigner votre nom");

        e.preventDefault();
    } else {

        var filtre = new RegExp("^[a-z0-9]+[.]?[a-z0-9]*@[a-z]+[.][a-z]{2,4}$");
        var resultat = filtre.test(nom.value);

        //alert("résultat vaut : " + resultat);

        if (resultat == false) {


            alert("nom saisi pas ok !");
            e.preventDefault();
        }


    }














}