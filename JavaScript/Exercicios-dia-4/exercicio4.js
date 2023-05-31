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
