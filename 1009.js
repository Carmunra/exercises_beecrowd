var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var funcionario = (lines.shift());
var salarioFixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

var comissao = vendas * 0.15;

var salarioFinal = salarioFixo + comissao;

console.log("TOTAL = R$ " + salarioFinal.toFixed(2));
