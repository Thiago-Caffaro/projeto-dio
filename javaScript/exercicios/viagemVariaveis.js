//Faça um programa para calcular o valor de uma viagem.
//Você terá 3 variáveis. Sendo elas:
//1 - Preço do combustível;
//2 - Gasto médio de combustível do carro por KM;
//3 - Distância em KM da viagem;
//Imprima no console o valor que será gasto de combustível para realizar esta viagem.

const precoLitro = 6.32;
const distancia = 80;
const gastoPorKm = 10;

let litroConsumido = distancia / kmPorLitro;
let gasto = litroConsumido * precoLitro;
console.log(gasto);
