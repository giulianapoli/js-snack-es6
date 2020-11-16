// jsnack 5
// Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
console.log(myArray.length);

let inputUser1 = parseInt(prompt(`Inserisci un numero compreso tra 0 e ${myArray.length-1}`));
let inputUser2 = parseInt(prompt(`Inserisci un numero compreso tra 0 e ${myArray.length-1}`));


/*
myArray.forEach((element, index) => {
  if ((index > inputUser1) && (index < inputUser2)) {
    newArr.push(element);
  }

});*/

var newArr = myArray.filter((element, index) => {
  return ((index > inputUser1) && (index < inputUser2));
});






// for (let i = inputUser1; i <= inputUser2; i++) {
//
//   let nomi = myArray[i];
//   newArr.push(nomi);
// }
// console.log(newArr);
