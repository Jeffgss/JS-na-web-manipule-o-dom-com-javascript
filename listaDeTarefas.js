const criarTarefa = (event) => {
  event.preventDefault();

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;
  const tarefa = document.createElement("li");

  tarefa.classList.add("task");
  const conteudo = (document.createElement("p").textContent = valor);
  tarefa.textContent = conteudo;

  tarefa.appendChild(BotaConclui());
  lista.appendChild(tarefa);

  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);

const BotaConclui = () => {
  const botaoConclui = document.createElement("button");

  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "concluir";
  botaoConclui.addEventListener("click", () => {
    console.log("Funciona!");
  });

  return botaoConclui;
};
