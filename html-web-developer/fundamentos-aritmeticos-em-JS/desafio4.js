var valor = prompt("Digite um valor inteiro para sacar de sua conta corrente?");
var cedulas = [100,50,20,10,5,2,1];
var nCedulas = [0,0,0,0,0,0,0];
var i = 0;

var saque = valor;

while (i < 7) {
  while (valor >= cadulas[i]) {
    nCedulas[0]++;
    valor -=  cadulas[i];
  }
  i++;
}

console.log(saque);
for (i = 0; i < 7; i++) {
  console.log(nCedulas[i] + " nota(s) de R$ " + cedulas[i] + "00";)
}