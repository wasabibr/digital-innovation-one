// Introdução ao JavaScript

/*
var nome = "Jefferson Oliveira";
var idade1 = 30.6;
var idade2 = 1;
var frase = "Japão é o melhor time do mundo";
// alert("Bem vindo" + nome);

alert(idade1 + idade2);

console.log(nome);
console.log(idade1 + idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));

// frase.toUpperCase() ou frase.toLowerCase()

*/

// Array e Dicionário

// array
/*
var lista = ["maça", "pêra", "laranja"];
lista.pop(); // retira o último elemento da lista
lista.push("uva");
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
*/

// dicionário
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
*/

// Condicionais, laços de repetição e Date

// condicionais
/*
var idade = prompt("Qual sua idade?");
if(idade >= 18)
{
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

// laços
/*
var count = 0;
while(count < 5)
{
    console.log(count);
    alert(count);
    count++;
}
*/
/*
var count;
for(count = 0; count <= 5; count++)
{
    alert(count);
}
*/

// date
/*
var d = new Date();
alert(d);
alert(d.getMonth());
alert(d.getMinutes());
*/