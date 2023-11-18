alert('Boas vindas ao jogo do numero secreto');
let dificuldade = 100;
let numeroSecreto = parseInt(Math.random() * dificuldade + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 a ${dificuldade}`);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if(numeroSecreto > chute) {
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//    alert(`Isso ai! Voce descobriu o ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Isso ai! Voce descobriu o ${numeroSecreto} com ${tentativas} tentativa`);
// }