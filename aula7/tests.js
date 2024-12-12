const nome = 'Luiz Otávio ';
const sobrenome = 'Miranda' ;
const idade = 30;
const peso = 84;
const alturaemM = 1.80;
let indiceMassaCorporal; 
let anoNascimento;

indiceMassaCorporal = peso/ (alturaemM*alturaemM);
anoNascimento = 2019 - idade;
console.log(anoNascimento);
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem,${alturaemM},de altura e seu imc é de, ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
// aula 7