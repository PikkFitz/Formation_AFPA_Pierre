// Exercice 
// Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :

// myVar.length : retourne le nombre de lettres de la chaîne myVar.
// myVar.substring(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p 
// (attention, en Javascript, le 1er caractère se trouve à la position 0)
// myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1).

function exercice_10_ter(){

    let m = window.prompt("Saisissez un mot : ");
    let nl = m.length;
    let nv = 0;
    let i = 0;
    
    window.alert(m + " contient " + nl + " lettres ");
    
    for (i=0; i<=nl-1; i++)
        {
            let lx = m.substring(i, i+1);
            window.alert(lx)
            console.log("m.substring = " + lx)
    
    
            if (lx == "a" || lx == "A" || lx == "e" || lx == "E" || lx == "i" || lx == "I" || lx == "o" || lx == "O" || lx == "u" || lx == "U" || lx == "y" || lx == "Y")
            {
                nv++;
                window.alert("Le nombre de voyelles = " + nv);
    
            }
    
        }    
    console.log("Fin de la boucle"); 
    
    window.alert("Le nombre de voyelles = " + nv);
    
    }