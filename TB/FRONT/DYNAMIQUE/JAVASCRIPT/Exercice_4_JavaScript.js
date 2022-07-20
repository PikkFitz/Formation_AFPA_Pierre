// Exercice
// Ecrivez un programme qui demande l'année de naissance à l'utilisateur. 
// En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur ou mineur.

function exercice_4(){

let y = 2022
let age
let a = window.prompt("Saisissez votre année de naissance : ");

age = y-a

if (age<18)
{
    window.alert("Vous avez : " + age + " ans et êtes mineur");
}
else
{
    window.alert("Vous avez : " + age + " ans et êtes majeur");
}

}