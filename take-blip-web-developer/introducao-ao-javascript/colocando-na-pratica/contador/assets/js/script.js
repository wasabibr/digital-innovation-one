
// Primeira versão (incompleta)
/*
var count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

function test() {
	kdowkdpo;
}
*/


// Primeira versão
var currentNumberWrapper1 = document.getElementById('currentNumber1');
var currentNumber1 = 0;

function increment1() {
		currentNumber1++;
		currentNumberWrapper1.innerHTML = currentNumber1;
}

function decrement1() {
	currentNumber1--;
	currentNumberWrapper1.innerHTML = currentNumber1;
}


// Versão com limitador de contagem
var currentNumberWrapper2 = document.getElementById('currentNumber2');
var currentNumber2 = 0;

function increment2() {
	// limite superior
	if(currentNumber2 < 10) {
		currentNumber2++;
		currentNumberWrapper2.innerHTML = currentNumber2;
	}
}

function decrement2() {
	// Limite inferior
	if(currentNumber2 > 0) {
		currentNumber2--;
		currentNumberWrapper2.innerHTML = currentNumber2;
	}
}


// Versão com variação de cor para valores negativos
var currentNumberWrapper3 = document.getElementById('currentNumber3');
var currentNumber3 = 0;

function increment3() {
	currentNumber3++;
	currentNumberWrapper3.innerHTML = currentNumber3;
	if(currentNumber3 < 0) {
		document.getElementById('currentNumber3').style.color = 'red';
	} else if(currentNumber3 > 0) {
		document.getElementById('currentNumber3').style.color = 'blue';
	} else {
		document.getElementById('currentNumber3').style.color = 'black';
	}
}

function decrement3() {
	currentNumber3--;
	currentNumberWrapper3.innerHTML = currentNumber3;
	if(currentNumber3 < 0) {
		document.getElementById('currentNumber3').style.color = 'red';
	} else if(currentNumber3 > 0) {
		document.getElementById('currentNumber3').style.color = 'blue';
	} else {
		document.getElementById('currentNumber3').style.color = 'black';
	}
}