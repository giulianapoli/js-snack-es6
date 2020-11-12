// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [];
let name = "nome";
let crew = "squadra";

for (let i = 0; i < 5; i++) {

  let inputUser = prompt(`Inserisci il ${name} di una ${crew}.`);

  const squadra = {
    'nome': inputUser,
    'punti': 0,
    'falli': 0
  }

  squadre.push(squadra);
};
console.log(squadre);
