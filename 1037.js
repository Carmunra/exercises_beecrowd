var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var num = parseFloat(lines.shift());

if (num > 100.00 || num < 0.00){
    console.log("Fora de intervalo");
} else if(num >= 0.00 && num <= 25.00){
    console.log("Intervalo [0,25]");
} else if(num >= 25.00 && num <= 50.00){
    console.log("Intervalo (25,50]");
} else if(num >= 50.00 && num < 75){
    console.log("Intervalo (50,75]");
} else if(num > 75.00 && num <= 100.00){
    console.log("Intervalo (75,100]");
}
