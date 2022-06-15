var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
var raio = parseFloat(input);
var area = n * raio * raio;

console.log("A=" + area.toFixed(4));