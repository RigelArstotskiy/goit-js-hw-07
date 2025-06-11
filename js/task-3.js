const textInput = document.querySelector("#name-input");
const outPut = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  outPut.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
