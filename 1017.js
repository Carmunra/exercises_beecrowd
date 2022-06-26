
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var horas = parseInt(lines.shift());
var velocidade = parseInt(lines.shift());

var litroFinal = horas * velocidade / 12;

console.log(litroFinal.toFixed(3));