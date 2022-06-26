var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distanciaX = parseInt(lines.shift());
var combustivelY = parseFloat(lines.shift());

var consumoMedio = distanciaX / combustivelY;

console.log(consumoMedio.toFixed(3) + " km/l");