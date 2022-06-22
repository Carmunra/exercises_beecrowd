var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = input.split(" ");
var pi = 3.14159;

var areaTrianguloRetangulo = (A * C) / 2;
var areaCirculoRaio = (C * C) * pi;
var areaTrapezio = ((parseFloat(A) + parseFloat(B)) * C) / 2;
var areaQuadrado = B * B;
var areaRetangulo = A * B;

console.log("TRIANGULO: " + areaTrianguloRetangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculoRaio.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));
