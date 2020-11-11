// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà:punti fatti e falli subiti

const squadre = [];

for (let i = 0; i < 5; i++) {

  let inputUser = prompt("Inserisci il nome di una squadra.");

  const squadra = {
    'nome': inputUser,
    'punti': Math.floor((Math.random() * 6)),
    'falli': Math.floor((Math.random() * 6))
  }

  squadre.push(squadra);
};
console.log(squadre);
