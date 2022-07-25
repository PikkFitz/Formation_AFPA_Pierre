// Exercice 

// Le but est d'externaliser le code JavaScript dans un fichier .js puis de tester l'intégration de code HTML dans les fonctions Javascript.

// 1/ Copier le code suivant dans votre éditeur de texte préféré.

// Enregistrer le fichier puis l'ouvrir avec votre navigateur. Observez ce qu'il se passe, y compris dans la console.

// 2/ Créer un fichier JavaScript nommé exercice1.js.
// 3/ Déplacer le code JavaScript du fichier HTML dans le fichier externe JavaScript et importer ce fichier dans le fichier HTML.
// 4/ Répéter le titre de la page dans <body> avec l'instruction document.write(). Consultez la documentation sur le site W3Schools. Ajouter du code HTML dans la chaîne de caractères passée en paramètre.
// 5/ Modifier la fonction alert() pour y passer en paramètre également du code HTML. Que remarquez-vous ?

    alert("Coucou !");
    console.log("Ah que Coucou !");
    document.write("Coucou beuh !"+"<br>");

// document.write fait apparaitre "Mon 1er script" dans la page html,
// document.write "reconnait" les balises html et place le texte dans la balise concernée
    document.write("<body>Mon 1er script</body>");

// alert fait apparaitre "<body>Mon 1er script</body>" dans une fenêtre, 
// donc alert ne prend pas en compte les balises html et les écrit dans la chaine de caractère comprise entre guillemets, comme du texte 
    alert("<body>Mon 1er script</body>");
