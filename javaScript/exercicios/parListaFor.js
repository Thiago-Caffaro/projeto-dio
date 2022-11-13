/**
 * Crie um programa que percorra uma lista de números e imprima todos os números pares encontrados.
 */
 
const numeros = [4, 8, 2, 3, 2, 6, 0, 10, 17, 38, 86, 47, 23]
for(let i=0; i <= numeros.length; i++){
	if (numeros[i] % 2===0){
		console.log(numeros[i])
	}
}