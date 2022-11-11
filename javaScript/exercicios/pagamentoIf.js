/**
 * 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
	  e a escolha da condição de pagamento.
	  Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
	  adequado.
	Código Condição de pagamento:
	- À vista Débito, recebe 10% de desconto;
	- À vista no Dinheiro ou PIX, recebe 15% de desconto;
	- Em duas vezes, preço normal de etiqueta sem juros;
 */
 
 console.log("Como deseja pagar?\n À vista Débito [0]\n À vista no Dinheiro ou PIX [1]\n Em duas vezes [2]")
 
 let valorFinal = 0;
 const modoPagamento = 0;
 const valor = 56;

 if (modoPagamento === 0){
	valorFinal = valor - (valor * 0.1)
	console.log("O valor final é de " + valorFinal + " com 10% de desconto.")
}else if (modoPagamento === 1){
	valorFinal = valor - (valor * 0.15)
	console.log("O valor final é de " + valorFinal + " com 15% de desconto.")
}else if (modoPagamento === 2){
	valorFinal = valor
	console.log("O valor final é de " + valorFinal + " sem nenhum desconto.")
}
 