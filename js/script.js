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
// const colors = [
//   "aqua",
//   "coral",
//   "pink"
// ];
// //creo array categorie per poi fare il match
const categories = [];
// //mi faccio restituire le categories
icons.forEach((item, i) => {
  if (categories.includes(item.category) == false) {
    categories.push(item.category);
  }
console.log(categories);
});
// //adesso le devo legare con i miei Colori e le mappo vecchio metodo
// const iconsColored = icons.map((icon)=>{
//   const categoryIndex = categories.indexOf(icon.category);
//   const colorItem = colors[categoryIndex];
//   // mi restituisce 6 per colore
//   // console.log(colorItem);
//   // glielo setto come chiave
//   icon.color = colorItem;
//
//   // console.log(icon.color);
//   return icon;
// });
// // me ne restituisce 18 e lo vai a risettare nel destructuring
// console.log(iconsColored);
//
// colorItem
// fai mappatura
const colors = [
  {
    category:"food",
    color: "coral",
  },
  {
    category:"animal",
    color: "aqua",
  },
  {
    category:"beverage",
    color: "blue",
  },
];
const iconsColored = icons.map((icon)=>{
  // const categoryIndex = categories.indexOf(icon.category);
  // const colorItem = colors[categoryIndex];
  // mi restituisce 6 per colore
  // console.log(colorItem);
  // glielo setto come chiave
  let colorItem;
  colors.forEach((item) => {
    if (icon.category == item.category) {
      colorItem = item.color;
    }
  });

  icon.color = colorItem;

  // console.log(icon.color);
  return icon;
});
// Milestone 1
// spostata gi??
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibil come //da layout.

//faccio ciclare gli elementi
// destrutturo e vado ad appendere
// con iconsContainer fai una selezione pi?? pulita per append
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
// ci serve per fare il filtro sulle icone
let select = $("#type");
categories.forEach((item) => {
let optionHtml = `<option value="${item}">${item}</option>`;
select.append(optionHtml);
});

select.change(function(){
  // mi prendo il valore di una select
  let optionSelected = $(this).val();
  let iconsFiltered = iconsColored.filter((icon)=> {
    return icon.category == optionSelected;
  });
  //se l'array ?? vuoto mettimi tutte le icone
  if (iconsFiltered.length == 0) {
    iconsFiltered = iconsColored;
  }
  // svuota il contenitore
  iconsContainer.html("");
  // queste sono le filtrate in base alla optionSelected
  iconsFiltered.forEach((icon) => {

    const {name, prefix, family, color} = icon;

    const html =
    `<div>
      <i class="${family} ${prefix}${name}"style="color:${color}"></i>
      <div class ="title">${name}</div>
    </div>`;

    iconsContainer.append(html);

  });
});
// colorItem
