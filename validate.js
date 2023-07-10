const nameInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const assuntoInput = document.getElementById("assunto");
const botaoform = document.querySelector(".formcontato__botao");
const formulario = document.querySelector(".formcontato__form");
const erroContainer = document.querySelector(".mensagem__erro");

function dataValidate() {
  function filterName() {
    botaoform.addEventListener("click", () => {
      const nome = nameInput.value;
      if (nome.length >= 50) {
        erroContainer.innerHTML =
          "<p>O nome deve ter no máximo 50 caracteres.</p>";
        return;
      }
      if (nome.length === 0) {
        erroContainer.innerHTML = "<p>O nome é um campo obrigatório.</p>";
        return;
      }
      if (nome.length > 0 || nome.length <= 50) {
        erroContainer.innerHTML = "";
        return;
      }
    });
  }
  filterName();

  function filterEmail() {
    botaoform.addEventListener("click", () => {
      const email = emailInput.value;
      if (email.length === 0) {
        erroContainer.innerHTML = "<p>O email é um campo obrigatório.</p>";
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        erroContainer.innerHTML =
          "<p>O email deve estar no formato correto.</p>";
        return;
      }
    });
  }
  filterEmail();
}

dataValidate();
