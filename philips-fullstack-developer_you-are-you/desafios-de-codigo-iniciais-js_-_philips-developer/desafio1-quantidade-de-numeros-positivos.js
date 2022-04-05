var cont = 0;
var i, num;
for (i = 0; i < 6; i++) {
  let num = parseFloat(gets());
  if (num > 0) {
    cont++;
  }
}

console.log(cont + " valores positivos");