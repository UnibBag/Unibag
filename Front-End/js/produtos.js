const openBtn = document.getElementById('open-modal-btn');
const modal = document.getElementById('product-modal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileUpload');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    
    // Adiciona um listener para o evento 'change' (quando um arquivo é selecionado)
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            // Se houver arquivos, mostra o nome do primeiro arquivo
            fileNameDisplay.textContent = this.files[0].name;
            fileNameDisplay.classList.remove('placeholder');
        } else {
            // Se o usuário cancelar a seleção, volta ao texto original
            fileNameDisplay.textContent = "Clique para selecionar o arquivo...";
            fileNameDisplay.classList.add('placeholder');
        }
    });
});