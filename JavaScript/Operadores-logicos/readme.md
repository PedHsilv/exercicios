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

## Operador OR:

Com o operador OR (ou ||, no JavaScript), é necessário que apenas uma das condições seja verdadeira: isso ou aquilo.

Imagine novamente que você está em uma padaria e que pede um café. Dessa vez, se não tiver café, você indica para a pessoa atendente que pode ser um suco de laranja. Como escreveríamos isso em JavaScript?

let bebidaPrincipal = 'café';
let bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'café' || bebidaAlternativa === 'suco de laranja') {
console.log("Obrigado(a) por me atender :D")
} else {
console.log("Ei, eu não pedi isso!");
}

O símbolo “||” é a representação em caractere desse operador. Novamente, são necessários dois elementos em torno dele para que funcione corretamente. Para que seu retorno seja verdadeiro, um de seus valores deve ser true ou ser considerado truthy.

Abaixo há uma tabela mostrando o resultado de cada operação, assim como representado para o operador “AND“:
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

## Operador NOT:

Vamos ver um exemplo do que o operador NOT (ou !, no JavaScript) faz. Você consegue prever o que esse código vai imprimir?

console.log((2 + 2) === 4);

O resultado a equação acima deveria retornar 4 não é? Mas, e se adicionassemos o operador "Not" anted dessa declaração ?

console.log(!(2 + ) ===4);

Ao executar o código, note que a resposta, que deveria está correta, mudará.
Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. Isso mesmo! Se tivermos uma variável ou um valor considerado true, podemos gerar o resultado oposto simplesmente fazendo !variável, ou seja, false.

Então, sabendo que o resultado original da operação é true, quando é inserido o operador NOT antes dela, obtemos o valor contrário à resposta final, que é false.

O conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:

Strings:
let squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

Números:
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no JavaScript. Logo, seu oposto é true.

Valores nulos:
console.log(!null); // true

Valores indefinidos:
console.log(!undefined); // true

Dentre muitos outros elementos.
