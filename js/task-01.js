const listCategories =  document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategories.length}`);
console.log("");

listCategories.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
    console.log("");
})