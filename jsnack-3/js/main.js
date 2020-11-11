// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.Calcolare perimetro e area.


const ipotenusaFunc = (altezza, base) => (altezza ** 2 + base ** 2) ** .5;

const triangolo = {
  'base': 10,
  'altezza': 12,
  'ipotenusa': function () {
    return ipotenusaFunc(this.altezza, this.base); // dichiaro la funzione esternamente e la richiamo inserendo i parametri
  },

  'area': function() {
    return (this.base * this.altezza) / 2;
  },
  'perimetro': function() {
    return this.base + altezza + this.ipotenusa();
  }
};
// console.log(triangolo);

let base = triangolo.base;
let altezza = triangolo.altezza;

const area = triangolo.area();
const perimetro = triangolo.perimetro();
const ipotenusa = triangolo.ipotenusa();
console.log(triangolo.perimetro());
console.log(area);
console.log(ipotenusa);
