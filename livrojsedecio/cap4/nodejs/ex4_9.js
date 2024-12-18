const prompt = require("prompt-sync")();
const numero = Number(prompt("Número(centena): "));
if(numero < 100 || numero >= 1000){
    console.log("Erro... o número deve ser uma centena");
    return;
} 
const num1 = Math.floor(numero/100); //obtém o 1º número
const sobra = numero % 100; //o que sobra(dezena)
const num2 = Math.floor(sobra/10); //obtém 2º número
const num3 = sobra % 10; //obtém 3º número
console.log(`O número invertido: ${num3}${num2}${num1}`); //exibe o númeroinvertido