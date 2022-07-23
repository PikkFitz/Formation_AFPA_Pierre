// Exercice 
// Concevez la fonction strtok() qui prend 3 paramètres str1, str2, n en entrée 
// et renvoie une chaîne de caractères : str1 est composée d'une liste de mots séparés par le caractère str2. 
// strtok() sert à extraire le nième mot de str1.

// Exemple :

// Pour str1 = « robert ;dupont ;amiens ;80000 », strtok (str1, « ; », 3) doit retourner amiens.

// Indice : utilisez la méthode split().

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_12_JS= document.getElementById("Id_button_Ex_12_JS");
bouton_Ex_12_JS.addEventListener("click", exercice_12_js);

function exercice_12_js(){

    function strtok(str1, str2, n)
    {
        // On rentre la suite str1, suite de mots et/ou nombres et/ou caractères, dans un tableau 
        // en lui indiquant qu'ils sont séparés par un espace " "
        
        const tab = str1.split(" ");
        
        console.log("Liste str1 : " + tab);
        window.alert("Liste str1 : " + tab);
        console.log("case(s) du tableau : " + tab.length);
        window.alert("case(s) du tableau : " + tab.length);
        
        // On transforme en suite, le tableau contenant la suite str1 en séparant tous ses éléments par le caractère "séparateur" (str2)
        
        let transformation_str1 = "";
        
        for (i=0; i<=tab.length-2; i++)
        {
            
            transformation_str1 = transformation_str1 + tab[i] + str2;
            
            console.log("transformation_str1 : " + transformation_str1);
            window.alert("transformation_str1 : " + transformation_str1);
            
        }
    
        transformation_str1 = transformation_str1 + tab[i];
        
        console.log("transformation_str1 : " + transformation_str1);
        window.alert("transformation_str1 : " + transformation_str1);
    
        // On rentre la suite transformation_str1, suite de mots et/ou nombres et/ou caractères, 
        // dans un tableau en lui indiquant qu'ils sont séparés par un séparateur (str2)

        const tab_str1 = transformation_str1.split(str2);
        console.log("Tableau str1 : " + tab_str1);
        window.alert("Tableau str1 : " + tab_str1);
    
        // On affiche le mot désiré, en le selectionnant par sa position (n) dans la suite transformation_str1

        if ((n>tab_str1.length) || (n<1) || (n == null))
        {
    
            console.log(" Erreur : n° du mot hors du tableau ");
            window.alert(" Erreur : n° du mot hors du tableau ");
    
        }
    
        console.log("Le mot n° " + n + " est : " + tab_str1[n-1]);
        window.alert("Le mot n° " + n + " est : " + tab_str1[n-1]);
        
    }
    
// Paramètres de la fonction :

str1 = window.prompt("Entrer une suite de mots et/ou nombres et/ou caractères : "); 

    if ((str1 == null) || (str1 == ""))
        {
            console.log("Mauvaise valeur");
            alert("Mauvaise valeur");  
        }

str2 = window.prompt("Entrer un caractère 'séparateur' : ");

    if ((str1 == null))
    {
        console.log("Mauvaise valeur");
        alert("Mauvaise valeur");  
    }

n = window.prompt("Entrer le n° du mot / nombre / caractère, de la suite précédente, désiré : ")

// On appelle la fonction 

strtok(str1, str2, n)

    
}

// Exemples de listes possibles :

// Pierre Paul Jacques Oliver Laurent Martin Eric Maxime Nicolas Robert
// 1 2 3 4 5 6 7 8 9 10