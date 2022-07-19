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