// Exercice 
// Concevez la fonction strtok() qui prend 3 paramètres str1, str2, n en entrée 
// et renvoie une chaîne de caractères : str1 est composée d'une liste de mots séparés par le caractère str2. 
// strtok() sert à extraire le nième mot de str1.

// Exemple :

// Pour str1 = « robert ;dupont ;amiens ;80000 », strtok (str1, « ; », 3) doit retourner amiens.

// Indice : utilisez la méthode split().

// Supprimer la ligne var et la ligne bouton pour remplacer le bouton par un lien (dans la page HTML)

var bouton_Ex_12_Bis_JS= document.getElementById("Id_button_Ex_12_Bis_JS");
bouton_Ex_12_Bis_JS.addEventListener("click", exercice_12_bis_js);

function exercice_12_bis_js(){

    function strtok(str1, str2, n)
    {
        const tab = str1.split(str2);
        
        console.log("Liste str1 : " + tab);
        window.alert("Liste str1 : " + tab);
        console.log("case(s) du tableau : " + tab.length);
        window.alert("case(s) du tableau : " + tab.length);
    
        if ((n>tab.length) || (n<1) || (n == null))
        {
    
            console.log(" Erreur : n° du mot hors du tableau ");
            window.alert(" Erreur : n° du mot hors du tableau ");
    
        }
    
        console.log("Le mot n° " + n + " est : " + tab[n-1]);
        window.alert("Le mot n° " + n + " est : " + tab[n-1]);
        
    }
    
str1 = window.prompt("Entrer une suite de mots et/ou nombres et/ou caractères : ");
console.log("str1 : " + str1)

    if ((str1 == null) || (str1 == ""))
        {
            console.log("Mauvaise valeur");
            alert("Mauvaise valeur");  
        }

str2 = window.prompt("Entrer le caractère 'séparateur' de la liste précédente : ");
console.log("Le charactère séparateur est : " + str2);

    if ((str1 == null))
    {
        console.log("Mauvaise valeur");
        alert("Mauvaise valeur");  
    }

n = window.prompt("Entrer le n° du mot / nombre / caractère, de la suite précédente, désiré : ")

strtok(str1, str2, n)

    
}

// Exemples de listes possibles :

// Pierre Paul Jacques Oliver Laurent Martin Eric Maxime Nicolas Robert
// 1 2 3 4 5 6 7 8 9 10
// Pierre,Paul,Jacques,Oliver,Laurent,Martin,Eric,Maxime,Nicolas,Robert
// Pierre!Paul!Jacques!Oliver!Laurent!Martin!Eric!Maxime!Nicolas!Robert
// 1/2/3/4/5/6/7/8/9/10