const numberOfCategories = document.querySelectorAll("#categories ul").length;

console.log(`Number of categories: ${numberOfCategories}`);

const showExactItem = document.querySelectorAll(".item");
showExactItem.forEach((item) => {
  const categoriesName = item.querySelector("h2").textContent;
  const categoriesElements = item.querySelectorAll("li");
  console.log(`Categories: ${categoriesName}`);
  console.log(`Elements: ${categoriesElements.length}`);
});
