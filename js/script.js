const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];
// Milestone 2
// Coloriamo le icone per tipo

// setto i colori in un array
const colors = [
  "aqua",
  "coral",
  "pink"
];
//creo array categorie per poi fare il match
const categories = [];
//mi faccio restituire le categories
icons.forEach((item, i) => {
  if (categories.includes(item.category) == false) {
    categories.push(item.category);
  }
  // console.log(categories);
});
//adesso le devo legare con i miei Colori e le mappo
const iconsColored = icons.map((icon)=>{
  const categoryIndex = categories.indexOf(icon.category);
  const colorItem = colors[categoryIndex];
  // mi restituisce 6 per colore
  // console.log(colorItem);
  // glielo setto come chiave
  icon.color = colorItem;

  // console.log(icon.color);
  return icon;
});
// me ne restituisce 18 e lo vai a risettare nel destructuring
console.log(iconsColored);
// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibil come //da layout.

//faccio ciclare gli elementi
// destrutturo e vado ad appendere
// con iconsContainer fai una selezione più pulita per append
const iconsContainer = $(".icons");
// lo cambi in iconsColored
iconsColored.forEach((icon) => {

  const {name, prefix, family, color} = icon;

  const html =
  `<div>
    <i class="${family} ${prefix}${name}"style="color:${color}"></i>
    <div class ="title">${name}</div>
  </div>`;

  iconsContainer.append(html);

});

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
