let palla = {
  'nome': 'palla',
  'peso': 10
};
console.log(palla);

let weight = "peso";
let ball = "palla";

let inputUser = prompt(`Inserisci il ${weight} della ${ball}.`);
console.log(inputUser);

palla.peso = inputUser;
console.log(palla);
