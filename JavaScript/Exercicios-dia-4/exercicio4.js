/*
const player = {
  name: "Marta",
  lastname: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWolrd: [2006, 2007, 2008, 2009, 2010, 2018],
};
//Agora supondo que você queira mencionar fatos importantes sobre o contexto. Para isso, usamos acessamos as chaves subdestinadas por meio da síntase 'meuObjeto.chave'.E para chavear uma váriavel usamos o ${meuObjeto.Chave}:
let message = `A jogadora ${player.name} ${player.lastname} tem ${player.age} anos de idade.`;
let achievements = `A jogadora ${player.name} ${player.lastname} foi eleita a melhor do mundo por ${player.bestInTheWolrd.length} vezes.`;
console.log(message);
console.log(achievements);

//Adicionando novas propriedades. Vamos o usar o exemplo de que, você foi designado para fazer o cadastro de alguns cliente... Pórem, você acaba esquecendo de acrescentar novas propriedades(email, fone, userGithub e linkedIn)... ao se deparar com isso, você tem a opção de refazer o código ou de acrescentar ao resultado final adicionando uma nova função chamada addProperty(object,key,value), que é seria exatamente assim:

const customer = {
  firstName: "Pedro",
  lastname: "Silva",
  age: 24,
  jog: "Operador de caixa",
};
////////////////////////////////////////////////////
const addProperty = (Object, key, value) => {
  if (typeof Object[key] === "undefined") {
    Object[key] = value;
  }
};
addProperty(customer, "email", "pedrohenriquesilva29@outlook.com");
addProperty(customer, "fone", "(81)9-8933-4434");
addProperty(customer, "userGithub", "PedHSilv");
addProperty(customer, "LinkedIn", "Pedro Silva");
////////////////////////////////////////////////////

console.log(customer);

//Manipulação de objetos: Parte 1

1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:
*/

const reader = {
  name: "Julia",
  lastName: "Pessoa",
  age: 21,
  favoriteBook: [
    {
      title: "O senhor dos Anéis - a sociedade do anel",
      author: "J.R.R Tolkien",
      publisher: "Martins Fontes",
    },
    {
      title: "Harry Poter e o Prisioneiro de Azkaban",
      author: "JK Rowling",
      publisher: "Rocco",
    },
  ],
};
let message = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBook[0].title}`;
let twoMessage = `${reader.name} tem ${reader.favoriteBook.length} livros favoritos`;

console.log(message);
console.log(twoMessage);
