function soma(num1, num2){
	return num1 + num2;
}
function parimpar(num){
	if (num % 2 === 0){
		return (num + " é par");
	}else {
		return (num + " é impar");
	}
}
function print(string){
	console.log(string);
}
module.exports = {soma, parimpar, print};
//00:2:45