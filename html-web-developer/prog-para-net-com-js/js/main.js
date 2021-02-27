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

// Desenvolva páginas web com JavaScript

// ex 01
/*
function soma(n1, n2)
{
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome)
{
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

// ex 02
/*
function soma(n1, n2)
{
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade)
{
    validar;
    if(idade >= 18)
    {
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);
*/

function clicou()
{
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por clicar</strong>";
    //alert("Obrigado por clicar");
}

function redirecionar()
{
    window.open("https://globallab.org/en/#.YDnWJavPzIU"); // abre em outra janela
    window.location.href = "https://globallab.org/en/#.YDnWJavPzIU"; // abre na mesma janela
}

function trocar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "Obrigado por pasar o mouse!";
    elemento.innerHTML = "Obrigado por pasar o mouse!"
}

function voltar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load()
{
    alert("Página carregada...");
}

function funcaoChange(elemento)
{
    console.log(elemento.value)
}