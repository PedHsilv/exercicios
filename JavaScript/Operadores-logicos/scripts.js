//atividade para fixar o uso das variaveis

let currentHour = 23;
let message = "";

if (currentHour >= 22) {
  message = "Não deveriamos comer nada :/ já é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noitee ! Vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde ??";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoçooo!!";
} else if (currentHour >= 4 && currentHour < 11) {
  message = "hmmm, cheirinho de caféee";
}
console.log(message);
