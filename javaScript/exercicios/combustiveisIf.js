// Faça um programa para calcular o valor de uma viagem.
// Você terá 5 variáveis. Sendo elas:
// 1 - Preço do Etanol;
// 2 - Preço do Gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;
// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 5.79;
const precoGas = 6.68;

let tipoCombus = 0;
const gastoPorKm = 10;
const distancia = 120;

const gastoLitro = distancia / gastoPorKm;
let gastoTot = 0;
console.log("1 = Etanol\n2 = Gasolina")
tipoCombus = 1;
if (tipoCombus === 1) {
	gastoTot = precoEtanol * gastoLitro;
	console.log("Foi pago " + gastoTot + " em Etanol")
} else if (tipoCombus === 2) {
	gastoTot = precoGas * gastoLitro;
	console.log("Foi pago " + gastoTot + " em Gasolina")
}
