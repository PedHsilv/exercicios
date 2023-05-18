# Hoje 18/05/23

Veremos Operadores lógicos

# Os principais vistos serão:

-&&
-||
-!

Ou melhor, numa melhor respectiva:
-And
-Or
-Not

# OPERADOR AND

O operador “AND“ (ou &&, no JavaScript) é binário. Isso significa que ele precisa de dois elementos para funcionar corretamente.

Para abstrair seu funcionamento, pense na seguinte situação: Você está em uma padaria para tomar café da manhã e faz o pedido: “Eu gostaria de um café E um pão na chapa, por favor”.

Seria frustrante se você recebesse apenas o café ou apenas o pão, não é? Ou se recebesse um pão na chapa acompanhado de um caldo de cana, por exemplo. Isso acontece porque a expectativa é de que as duas condições sejam atendidas corretamente. Esse é exatamente o papel do &&. Ele só vai retornar true se as duas operações que estão em volta dele forem consideradas verdadeiras.

Por exemplo:

let comida = 'pão na chapa';
let bebida = 'café';

if (bebida === 'café' && comida === 'pão na chapa') {
console.log('Muito obrigado(a) pela refeição :)');
} else {
console.log('Acho que houve um engano com meu pedido');
}

Logo, a resposta deveria ser positiva. Para isso, deveremos classificar se as condições para a resposta ser positiva ou negativa. Para isso, usaremos as expressões 'True' e 'False'. Para que o retorno seja positivo, as duas condições deveriam estar em conformidade(True).

Por exemplo:

let conditionOne = true;
let conditionTwo = false;

console.log(conditionOne && conditionTwo);

Executando o código acima, a resposta seria 'False', porque uma das condições não é 'True', sendo assim, não estão em conformidade.

Um outro exemplo que poderiamos mostrar seria:

let cenouras = true;
let leite = true;
let arroz = true;
let feijao = true;

let listaDeCompras = cenouras && leite && arroz && feijao;

Vemos que todos estão em conformidade. Sendo assim, temos uma resposta positiva do respectivo operador.

- Abaixo há um mini cheat sheet para você verificar em quais possibilidades teremos resposta true ou false.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

# PRECEDÊNCIA DE OPERADORES

console.log(10 + 5 \* 5); // 10 + 25

Nesse código, primeiro é realizada a multiplicação 5 \* 5, cujo resultado é 25. Depois, é realizada a soma do resultado dessa multiplicação com 10, ou seja, 25 + 10.

Assim como na matemática, primeiro realiza-se a multiplicação e, depois, a soma. Portanto, o retorno desse código é 35.
