//Primeira Atividade do dia 2
//Dar um valor a variável menuServices para que passe a ter o valor "Serviços":
/*
const menu = ["Home", "Serviços", "Portifólio", "Links"];
const menuServices = "Serviços";
console.log(menuServices);
*/

//Segunda Atividade do dia 2
//Adicionar o valor "Contato" no final do array menu:
/*
const menu = ["Home", "Serviços", "Portifólio", "Links"];

menu.push("contato");
console.log(menu);
*/

//Terceira Atividade do dia 2
//Estrutura de repetição do for:
/*
const laps = 68;

for (let index = 1; index <= laps; index += 1) {
  console.log(`Volta ${index} completada!`);
}

console.log("Fim da corrida");
*/

//Exemplo prático da somatoria de todos os elementos de um array de números.
/*
const numbers = [2, 19, 23, 4, 8, 10];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);
*/

//Quarta Atividade do dia 2
//Imprima os elementos da lista groceryList atráves de console.log:

const groceryList = ["Arroz", "Feijão", "Alface", "Melancia", "Macarrão"];
for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}
