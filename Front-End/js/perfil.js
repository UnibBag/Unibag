// Máscara automática para celular
const celularInput = document.getElementById("celular");

celularInput.addEventListener("input", () => {
  let value = celularInput.value.replace(/\D/g, "");
  
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length <= 10) {
    celularInput.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else {
    celularInput.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }
});

// Captura envio do formulário
document.getElementById("perfilForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Perfil atualizado com sucesso!");
});

