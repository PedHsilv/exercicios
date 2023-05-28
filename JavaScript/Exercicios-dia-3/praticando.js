//Práticando o chamado de uma função (usando o return para imprimir uma string):
/*
function giveGreeting() {
  return `Salve galéeera, sejam muito bem-vindos!`;
}
console.log(giveGreeting());
*/

//Um outro exemplo para imprimir a soma de dois valores (também pode ser usado para eventuais calcúlos aritiméticos).
/*
function sum(num1, num2) {
  return num1 + num2;
}

console.log(10 + 35);
*/

//Ou, para agregar uma legibilidade ao resultado pode-se atribuir o retorno a uma constante.
/*
function sum(num1, num2) {
  return num1 + num2;
}
const result = sum(20, 30);
console.log(result);
*/
// Função para retornar um elemento 'true' ou 'false' para uma busca exclusiva no banco de dados.
//Exemplo:
/*
const onliBankCustomers = ["Pedro", "Vitória", "Aninha", "Luciene"];
const bancoBradescoCustomers = ["Olivia", "Kelly", "Marcos", "Mariane"];

function findElements(array, element) {
  return array.includes(element);
}
console.log(findElements(onliBankCustomers, "Pedro")); //true
console.log(findElements(bancoBradescoCustomers, "Kelly")); //true
*/
