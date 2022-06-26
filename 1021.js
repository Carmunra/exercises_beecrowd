var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(input);
/*
const notas = [100, 50, 20, 10, 5, 2, 1];
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:")

for(let nota of notas){
    let qtdNotas = parseInt(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    valor -= qtdNotas * nota;
}

console.log("MOEDAS:");

let centavos = 0;

for(centavos in moedas){
    let qtdMoeda = parseFloat(valor / centavos);
    console.log(`${qtdMoeda} moeda(s) de R$ ${centavos}`);
    valor -= qtdMoeda * centavos;
}*/

let cedula = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let aux = 0
console.log("NOTAS:")
for (let i = 0; i < 6; i++) {
    aux = parseInt(valor / cedula[i])
    console.log(`${aux} nota(s) de R$ ${cedula[i].toFixed(2)}`)
    valor = valor % cedula[i]
}
console.log("MOEDAS:")
for (let j = 6; j < cedula.length; j++) {
    aux = parseInt(valor / cedula[j])
    console.log(`${aux} moeda(s) de R$ ${cedula[j].toFixed(2)}`)
    valor = valor % cedula[j] + 0.00001
}