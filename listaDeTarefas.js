const criarTarefa = (event) => {
  event.preventDefault();

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;
  const tarefa = document.createElement("li");

  tarefa.classList.add("task");
  const conteudo = (document.createElement("p").textContent = valor);
  tarefa.textContent = conteudo;
  lista.appendChild(tarefa);

  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);
