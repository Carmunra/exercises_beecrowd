var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var idFuncionario = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());

var salario = parseFloat(horasTrabalhadas * valorHora);

console.log("NUMBER = " + idFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
