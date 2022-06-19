var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [peca1, numPeca1, valorPeca1] = lines.shift().split(" ");
var [peca2, numPeca2, valorPeca2] = lines.shift().split(" ");

var valorTotalItem1 = numPeca1 * valorPeca1;
var valorTotalItem2 = numPeca2 * valorPeca2;

var valorPagar = valorTotalItem1 + valorTotalItem2;

console.log("VALOR A PAGAR: R$ " + valorPagar.toFixed(2));