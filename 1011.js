var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var raio = parseFloat(lines.shift());

var volume = (4/3.0) * pi * (raio * raio * raio);

console.log("VOLUME = " + volume.toFixed(3));