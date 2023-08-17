
const ulCategories = document.querySelector("#categories");

const AllLiItem = ulCategories.children;
console.log(`Number of categories: ${AllLiItem.length}`);
console.log("");



Array.from(AllLiItem).forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
    console.log("");
});