/*
-Percorra o array imprimindo todos os valores contidos nele com a função console.log().

-Some todos os valores contidos no array e imprima o resultado.

-Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

-Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

-Utilizando for, descubra o maior valor contido no array e imprima-o.

-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.*/

/*
//Imprimindo valores:
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numebers.lenght; index +=1){
console.log(numbers);}

//Somando todos os valores:
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);
*/

//Tirando a média aritimética:
/*
const mediaAritimetica = [278 / 10];
console.log(mediaAritimetica);

//Ou

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

let result = sum / numbers.length;

console.log(result);

*/

//Imprimindo mensagem true:
/*
let resultado = 27.8;

if (resultado > 20) {
  console.log("O Valor da média aritimética é maior que 20");
} else if (resultado < 20) {
  console.log("O Valor da média aritimética é menor que 20");
}

//Ou

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
};

result = result / numbers.length;

if (result > 20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
};

*/

//Descobrindo o maior valor da array:
/*
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

let highNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > highNumber) {
    highNumber = numbers[index];
  }
}
console.log(highNumber);
*/

//Descobrindo quantos valores ímpares há na array:

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log(result);
}
