// jsnack 6
// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomCharacter);

// creo la funzione che duplica array
const map1 = arrayObj.map(function(arrayObj) {
  return arrayObj;

});
console.log(map1);
console.log(arrayObj);

arrayObj.position = "value3";
console.log(arrayObj);
