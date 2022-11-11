/*
	1 - Crie uma classe para representar carros.
	Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
	Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
	gasto em reais para realizar este percurso.
*/

class carros{
	marca;
	cor;
	gastoCombustivel;

	constructor (marca, cor, gastoCombustivel) {
		this.marca = marca;
		this.cor = cor;
		this.gastoCombustivel = gastoCombustivel;
	}
	
	gastoDoPercurso(distancia, precoCombustivel){
		return distancia * this.gastoCombustivel * precoCombustivel;
	}
}

const carro1 = new carros('svagen', 'amarelo',1/12);
console.log(carro1.gastoDoPercurso(87, 5));