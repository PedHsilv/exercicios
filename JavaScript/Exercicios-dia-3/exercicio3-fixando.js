/*
//Saldo em conta
function balance(num1) {
  return 32900;
}
const sum = 32900;
console.log("Seu saldo em conta é de R$" + sum);
*/

//Subtraindo valor
/*
function balance(num1, num2) {
  return 32900 - 450;
}
const sum = 32900 - 450;
console.log("Seu saldo após saque é de R$" + sum);
*/

//Obtendo uma porcentagem sob saldo em conta
/*
function balance(num1, num2) {
  return 32450 * (1.5 / 100);
}
const sum = 32450 * (1.5 / 100);
console.log(
  "Seu último rendimento foi de R$" +
    sum +
    ". Que é equivalente à 1,5% a.m(ao mês)"
);
*/
//Obtendo uma porcentagem de investimento mensal
/*
const sum = 32450 / 12;
function balance(num1, num2) {
  return sum;
}
console.log(
  "A média de investimendo mensal nos últimos 12 meses foram de R$" +
    sum.toFixed(2) +
    " reais."
);

//ou 

const balance = 100;

function sumBalance(value) {
  return value + balance;
};

function subBalance(value) {
  return balance - value;
};

function multBalance(value) {
  return value * balance;
};

function divBalance(value) {
  return balance / value;
};

// Chamadas das funções passando o valor do parâmetro
console.log(sumBalance(300)); // 400
console.log(subBalance(50)); // 50
console.log(multBalance(2)); // 200
console.log(divBalance(5)); // 20
*/

//EXERCICIO-1: Agora, iremos desenvolver um programa para adicionar clientes ao array 'trybeBank'. A função irá se chamar addCustomer. E o trybeBank se denominará trybeBankCustomers
/*
const trybeBankCustomers = ["Olivia", "Nat", "Gus"];

function addCustomer(customer) {
  if (typeof customer != "string") {
    return "O parâmetro passado deve ser do tipo string";
  }

  trybeBankCustomers.push(customer);
  return "Pessoa adicionada com sucesso!";
}
console.log(addCustomer(true));
console.log(addCustomer("Joaquim"));
console.log(trybeBankCustomers);
*/

//EXERCICÍO-2: Também pode ser feita dessa maneira:

const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

function addCustomers(customers, newCustomers) {
  for (let index = 0; index < newCustomers.length; index += 1) {
    if (typeof newCustomers[index] === "string") {
      customers.push(newCustomers[index]);
    } else {
      return "Todos os valores precisam ser strings.";
    }
  }
  return trybeBankCustomers;
}
console.log(addCustomers(trybeBankCustomers, ["Carolina", "Adamastor"]));
console.log(addCustomers(trybeBankCustomers, ["Miranda", 87]));
