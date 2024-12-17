const prompt = require("prompt-sync")();

const salario = Number(prompt("Digite o seu salário: "));
const tempo = Number(prompt("Tempo de serviço(anos): "));

const quadrienios = Math.floor(tempo/4);
const acrescimo = salario * (quadrienios/100);

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário final R$: ${(salario+acrescimo).toFixed(2)}`);