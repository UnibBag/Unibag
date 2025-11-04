document.getElementById("cpf").addEventListener("input", function(e) {
  let value = e.target.value.replace(/\D/g, ""); 
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length <= 9) {
    e.target.value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  } else {
    e.target.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
  }
});

document.getElementById("cnh").addEventListener("input", function(e) {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 11);
});

document.getElementById("placa").addEventListener("input", function(e) {
  let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  
  if (value.length <= 3) {
    e.target.value = value;
  } else if (value.length <= 7) {
    e.target.value = value.replace(/^([A-Z]{3})(\d{0,4})$/, "$1-$2");
  } else {
    e.target.value = value.slice(0, 7).replace(/^([A-Z]{3})(\d{0,4})$/, "$1-$2");
  }
});

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const cnh = document.getElementById("cnh").value;
  const placa = document.getElementById("placa").value;
  const veiculo = document.querySelector("input[name='veiculo']:checked")?.value;

  if (!veiculo) {
    alert("Selecione o tipo de veículo!");
    return;
  }

  alert(`✅ Cadastro realizado com sucesso!
Nome: ${nome}
CPF: ${cpf}
Email: ${email}
CNH: ${cnh}
Placa: ${placa}
Veículo: ${veiculo}`);
});

const phoneInput = document.getElementById("telefone");

phoneInput.addEventListener("input", () => {
  let value = phoneInput.value.replace(/\D/g, ""); // remove tudo que não for número

  // aplica a máscara (99) 99999-9999
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 6) {
    phoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
  } else if (value.length > 2) {
    phoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else {
    phoneInput.value = value;
  }
});
