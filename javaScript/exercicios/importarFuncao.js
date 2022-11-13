const funcoes = require("./funcoes-auxiliares");
funcoes.print("Among us it's a really cool game!");
console.log(funcoes.soma(4, 6));
console.log(funcoes.parimpar(3));
console.log(funcoes.parimpar(6));
//ou
const {soma, parimpar, print} = require("./funcoes-auxiliares");
print("Among us it's the best game ever made!");
console.log(soma(34, 82));
console.log(parimpar(84));
console.log(parimpar(37));

//00:03:35