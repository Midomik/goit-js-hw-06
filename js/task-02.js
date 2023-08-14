const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const t2ListOfIngradients =document.querySelector("#ingredients");


ingredients.forEach(item => {
  const t2LiItem=document.createElement("li")
  t2LiItem.textContent=item;
  t2LiItem.classList.add("item")
  t2ListOfIngradients.append(t2LiItem);
});
