// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.Calcolare perimetro e area.
const base = triangolo.base;
const altezza = triangolo.altezza;

const area = triangolo.area();
const perimetro = triangolo.perimetro();
const ipotenusa = triangolo.ipotenusa();

const ipotenusaFunc = () => ipotenusaFunc = () => (this.altezza ** 2 + this.base ** 2) ** .5;

const triangolo = {
  'base': 10,
  'altezza': 12,
  'ipotenusa': ipotenusaFunc()
  },
  'area': function() {
    return (this.base * this.altezza) / 2;
  },
  'perimetro': function() {
    return this.base + altezza + this.ipotenusa();
  }
};
// console.log(triangolo);


console.log(perimetro);
console.log(area);
