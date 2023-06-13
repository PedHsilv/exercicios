//As linhas de código a baixo, são as respostas para o "Para Fixar.". As respostas podem ser conferidas no console do inspencionar do navegador.

//Alternativa dada pelo curso:
/*const title = document.getElementById("page-title");
title.innerText = "Breaking Bad";

const firstParagraph = document.getElementById("first-paragraph");
firstParagraph.innerText =
  "Um professor de quimíca descobre que tem um câncer no pulmão e luta contra a vida, de maneira nada convêncional para obter um tratamento. ";
firstParagraph.style.fontStyle = "italic";

const subTitle = document.getElementById("subtitle");
subTitle.innerText = "Mas o que vem por ai pode te surpreender";

const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText =
  "Diante da necessidade de ter um tratamento adequado, Walter White busca alternativas para obter dinheiro rápido. ";
*/

//Alternativa feita por mim feita pelo console:
// Ambas, funcionais:
console.log((document.getElementById("page-title").innerText = "Breaking Bad"));

const firstParagraph = document.getElementById("first-paragraph");
firstParagraph.style.fontStyle = "italic";

console.log(
  (document.getElementById("first-paragraph").innerText =
    "Repleta de entrigas, produção meticulosa e muito dinheiro. Breaking Bad conta a história de Walter Whait, um professor de quimíca que luta conta um câncer  no pulmão e busca meios nada convêncionais para lidar com o traatamento que não é nada barato.")
);

console.log((document.getElementById("subtitle").innerText = "Elenco"));

console.log(
  (document.getElementById("second-paragraph").innerText =
    "O elenco é composto por Bryan Cranston (Walter White) e Aaron Paul (Jess Pinkman).")
);

//Retorna a somente a tag selecionada com a alteração desejada. Entenda que ela só retornará, usando o pseudo seletor [ ].
const subtitle = document.getElementsByTagName("h2");
subtitle[0].style.color = grey;
