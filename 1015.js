var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [x1, y1] = lines[0].split(" ");
var [x2, y2] = lines[1].split(" ");

var distancia = Math.sqrt((parseFloat(x2) - parseFloat(x1)) ** 2 + (parseFloat(y2) - parseFloat(y1)) ** 2);

console.log(distancia.toFixed(4));
