const nameInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const assuntoInput = document.getElementById("assunto");
const messageInput = document.getElementById("mensagem");
const botaoform = document.querySelector(".formcontato__botao");
const formulario = document.querySelector(".formcontato__form");
const erroContainer = document.querySelector(".mensagem__erro");

function dataValidate() {
  const nome = nameInput.value;
  const email = emailInput.value;
  const assunto = assuntoInput.value;
  const mensagem = messageInput.value;

  if (nome.length >= 50) {
    erroContainer.innerHTML = "<p>O nome deve ter no máximo 50 caracteres.</p>";
    return;
  }
  if (nome.length === 0) {
    erroContainer.innerHTML = "<p>O nome é um campo obrigatório.</p>";
    return;
  }

  if (email.length === 0) {
    erroContainer.innerHTML = "<p>O email é um campo obrigatório.</p>";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    erroContainer.innerHTML = "<p>O email deve estar no formato correto.</p>";
    return;
  }

  if (assunto.length === 0) {
    erroContainer.innerHTML = "<p>O campo assunto é obrigatório.</p>";
    return;
  }
  if (assunto.length >= 50) {
    erroContainer.innerHTML =
      "<p>O assunto deve ter no máximo 50 caracteres.</p>";
    return;
  }

  if (mensagem.length === 0) {
    erroContainer.innerHTML = "<p>O campo de mensagem é obrigatório.</p>";
    return;
  }
  if (mensagem.length >= 300) {
    erroContainer.innerHTML =
      "<p>A mensagem deve ter no máximo 300 caracteres.</p>";
    return;
  }
}

botaoform.addEventListener("click", dataValidate);
