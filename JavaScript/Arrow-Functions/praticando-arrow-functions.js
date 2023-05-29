//As arrow functions não possuem nomes e são armazenadas em variáveis, bem como, são diferentes das funções normais.Elas não possuem palavra chave tal como *function*. Para se usar uma arrow fuction(=>), deve-se atribui-la a uma constante.Para executala, basta invocar a função(console.log( )).
/*
const subtraction = (num1, num2) => {
  return num1 - num2;
};
console.log(subtraction(100, 25)); //75
*/

// Mas podemos reduzir a quantidade de linhas, mantendo um código limpo com uma pequena redução de caractéres. Bem como a retirada das chaves e do return. ENTENDA: De certa forma, com a retirada das chaves e do retorno do valor, com o uso direto do arrow function, o js entende automaticamente que deverá entregar determinado valor. Esse ato é chamado de return implícito.

const subtraction = (num1, num2) => num1 - num2;
console.log(subtraction(300, 72)); //228
