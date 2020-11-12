// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
let name1 = 'mountainbike';
let name2 = 'graziella';
let name3 = 'bmx';
let name4 = 'downhill';

let weight1 = 10;
let weight2 = 25;
let weight3 = 8;
let weight4 = 15;

const bici = [
  {
    name1,
    weight1
  },
  {
    name2,
    weight2
  },
  {
    name3,
    weight3
  },
  {
    name4,
    weight4
  }
];
console.log(bici);

const [myFirstBike, mySecondBike, myThirdBike, myFourthbike] = bici;
console.log(myFirstBike, mySecondBike, myThirdBike, myFourthbike);

let lightBike = 'La bici più leggera è: ';

let templateLiteral = `${lightBike} ${myThirdBike}`;
console.log(templateLiteral);

document.getElementById('result').innerHTML = templateLiteral;

// let biciLeggera = bici[0];
// for (let i = 1; i < bici.length; i++) {
//
//   if (bici[i].peso < biciLeggera.peso) {
//     biciLeggera = bici[i];
//   }
// };
// console.log(biciLeggera);
