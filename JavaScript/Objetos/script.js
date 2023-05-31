//Objetos, são todas as estruturas ou coleções compostas por pares e chave-valor. Oque isso quer dizer? Que dentro delas, é possível armazenar qualquer tipo de dado, até mesmo armazenar um objeto dentro de outro mesmo dentro de uma array. Isso é, elas são armazenadas como *strings*.Por exemplo:
const company = {
  name: "Raggaza",
  slogan: "Fashion Clothing",
  foundationYear: "since 2022",
  isActive: true,
  cities: ["Caruaru-PE"],
};
console.log(company);

//E como comentei acima, que é possível armazenar objetos dentro de objetos, mesmo sendo em arrays.Lembrando que, para acessar os dados dentro do segundo objeto, é necessário acessar o primeiro objeito e em seguida o segundo objeto. E caso contenha mais dados como o exemplo a baixo, deve-se fazer o mesmo procedimento(console.log(account.bank.name)) ou com o uso de cochetes (account(['bank']['name'])). Aqui está mais um exemplo:
const account = {
  agency: "Agencia: 0334",
  bank: {
    cod: "01001",
    id: 7,
    name: "Raggaza-clothing.inc",
  },
};
console.log(account.agency);
console.log(account.bank);

// E tem mais ! Imagine que, dentro do objeto pode conter muuuito mais do que dois objetos!! Veja só:

const user = {
  id: 2509,
  email: "pedrohenriquesilva29@outlook.com",
  info: {
    name: "Pedro",
    lastName: "Silva",
    address: {
      street: "Avenida Boa Vista, 1001 - casa",
      district: "Loteamento Boa vista",
      state: "Caruaru-PE",
    },
  },
};
console.log(user.id);
console.log(user.email);
console.log(user.info.address.street);
console.log(user.info.address.state);
