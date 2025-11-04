document.addEventListener("DOMContentLoaded", () => {
  // ----- ENDEREÇOS -----
  const cardsEndereco = document.querySelectorAll(".enderecos div");

  cardsEndereco.forEach(card => {
    card.addEventListener("click", () => {
      // Remove seleção de todos
      cardsEndereco.forEach(c => {
        c.classList.remove("cardAtivo");
        c.classList.add("cardInativo");
      });

      // Adiciona seleção ao clicado
      card.classList.remove("cardInativo");
      card.classList.add("cardAtivo");
    });
  });

  // ----- FORMAS DE PAGAMENTO -----
  const btnPagamentos = document.querySelectorAll(".btn-pagamento");

  btnPagamentos.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove classe ativa de todos os botões
      btnPagamentos.forEach(b => b.classList.remove("ativo"));

      // Adiciona ao botão clicado
      btn.classList.add("ativo");
    });
  });
});

// ==== POPUP NOVO ENDEREÇO ====
document.addEventListener("DOMContentLoaded", () => {
  const linkEndereco = document.querySelector(".link"); // “Selecionar outro endereço”
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup-endereco");
  const fecharPopup = document.getElementById("fecharPopup");

  linkEndereco.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    popup.style.display = "flex";
  });

  const fechar = () => {
    overlay.style.display = "none";
    popup.style.display = "none";
  };

  fecharPopup.addEventListener("click", fechar);
  overlay.addEventListener("click", fechar);

  // Exemplo simples de submit (você pode integrar com backend depois)
  const form = document.getElementById("form-endereco");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Novo endereço adicionado com sucesso!");
    fechar();
  });
});

// === MÁSCARA DE CEP ===
document.addEventListener("DOMContentLoaded", () => {
  const inputCep = document.querySelector('input[placeholder="Insira o CEP"]');

  if (inputCep) {
    inputCep.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
      if (valor.length > 8) valor = valor.slice(0, 8); // limita a 8 dígitos
      if (valor.length > 5) valor = valor.replace(/(\d{5})(\d{1,3})/, "$1-$2"); // adiciona o hífen
      e.target.value = valor;
    });
  }
});

// ==== POPUP NOVO CARTÃO ====
document.addEventListener("DOMContentLoaded", () => {
  const linkCartao = document.querySelectorAll(".link")[1]; // segundo link da página
  const overlayCartao = document.getElementById("overlay-cartao");
  const popupCartao = document.getElementById("popup-cartao");
  const fecharPopupCartao = document.getElementById("fecharPopupCartao");

  linkCartao.addEventListener("click", (e) => {
    e.preventDefault();
    overlayCartao.style.display = "block";
    popupCartao.style.display = "flex";
  });

  const fecharCartao = () => {
    overlayCartao.style.display = "none";
    popupCartao.style.display = "none";
  };

  fecharPopupCartao.addEventListener("click", fecharCartao);
  overlayCartao.addEventListener("click", fecharCartao);

  const formCartao = document.getElementById("form-cartao");
  formCartao.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Cartão adicionado com sucesso!");
    fecharCartao();
  });
});