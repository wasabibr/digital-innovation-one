// Tipos primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// Numbers
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// Strings
var nome = 'Jefferson';
console.log(typeof(nome));

// Function
var funcao = function() {};
console.log(typeof(funcao));

// Como declarar
var variavel = 'jefferson';
variavel = 'oliveira';
console.log(variavel);

let variavel2 = 'jefferson';
variavel2 = 'oliveira';
console.log(variavel2);

const constante = 'jefferson';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();