const novaTarefa = document.querySelector("[data-form-button]");
const input = document.querySelector("[data-form-input]");

novaTarefa.addEventListener("click", (event) => {
  console.log("funcionando");
  event.preventDefault();
  console.log(input.value);
});
