const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ListOfIngradients =document.querySelector("#ingredients");


const arrLiItem=ingredients.map(item => {
  const LiItem=document.createElement("li");
  LiItem.textContent=item;
  LiItem.classList.add("item");
   return LiItem;
});


ListOfIngradients.append(...arrLiItem);