var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let qtdSegundos = parseInt(input);

const valores = [3600, 60, 1];
const resultado = [];

for(let valor of valores){
    resultado.push(parseInt(qtdSegundos / valor))
    qtdSegundos = qtdSegundos % valor;
}

console.log(resultado.join(":"));

/*
const qtdHoras = parseInt(qtdSegundos /3600);
qtdSegundos = qtdSegundos % 3600;

const qtdMinutos = parseInt(qtdSegundos / 60);
qtdSegundos = qtdSegundos % 60;
*/