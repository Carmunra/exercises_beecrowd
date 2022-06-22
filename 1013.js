var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = input.split(" ");

var maiorAB = parseInt((A + B + (A - B)) / 2);

console.log("TRIANGULO: " + maiorAB);