const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input.style.display === "") {
    input.style.display = "inline";
  } else {
    input.style.display = "";
  }
});
