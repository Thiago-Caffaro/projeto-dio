let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 81;
let achou = "nao"
for (let p=0; p <= elementos.length; p++){
  if (elementos[p] === valor){
    console.log("Achei " + elementos[p] +" na posicao " + elementos.indexOf(elementos[p]))
    achou = "sim"
  }
}
if (achou == "nao"){
	console.log("Numero " + valor + " nao encontrado!")
}
