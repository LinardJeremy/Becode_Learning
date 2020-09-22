
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
})();
let age = window.prompt("Quel est ton age ?", "");
let gender = window.prompt("Es-tu une fille ou un garçon ?");
let town = window.prompt("Dans quelle ville vis-tu ?");
let bouton = window.confirm("Tu as" + " " + age + " ans, tu es un/une"+" "  + gender + " et tu vis à "+ town + " si ces infos sont correct clique sur ok");
if (bouton=== true){
    alert("C'est bon!");
}
while (bouton === false){
alert("on recommence");
let age = window.prompt("Quel est ton age ?", "");
let gender = window.prompt("Es-tu une fille ou un garçon ?");
let town = window.prompt("Dans quelle ville vis-tu ?");
let bouton = window.confirm("Tu as" + " " + age + " ans, tu es un/une"+" "  + gender + " et tu vis à "+ town + " si ces infos sont correct clique sur ok");

if (bouton ==true){
    alert("C'est bon!");
    break;
}

}


