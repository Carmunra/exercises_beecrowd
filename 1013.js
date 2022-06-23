var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
/*
var [A, B, C] = input.split(" ");

var maiorAB = parseInt((A + B + (A - B)) / 2);

console.log("TRIANGULO: " + maiorAB);*/

const [A, B, C] =  input.split(" ").map(item => parseInt(item));

const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorXC);