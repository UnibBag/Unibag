// Seleciona o botão principal e o menu
const btnFiltros = document.getElementById('btnFiltros');
const menuFiltros = document.getElementById('menuFiltros');
// 🔑 NOVO: Seleciona o ícone da seta/chevron
const chevronIcon = document.getElementById('chevronIcon'); 

// Lógica para alternar (abrir/fechar) o menu ao clicar no botão
btnFiltros.addEventListener('click', () => {
    const estaOculto = menuFiltros.hasAttribute('hidden');
    
    if (estaOculto) {
        // ABRIR
        menuFiltros.removeAttribute('hidden');
        btnFiltros.setAttribute('aria-expanded', 'true');
        
        // 🔑 Mudar a seta para cima (ri-arrow-up-s-line)
        chevronIcon.classList.remove('ri-arrow-down-s-line');
        chevronIcon.classList.add('ri-arrow-up-s-line');
    } else {
        // FECHAR
        menuFiltros.setAttribute('hidden', '');
        btnFiltros.setAttribute('aria-expanded', 'false');
        
        // 🔑 Mudar a seta para baixo (ri-arrow-down-s-line)
        chevronIcon.classList.remove('ri-arrow-up-s-line');
        chevronIcon.classList.add('ri-arrow-down-s-line');
    }
});

// ... (Opcional: Lógica para fechar ao clicar fora, que permanece a mesma) ...

// ... (Lógica de filtro que permanece a mesma, mas adicione o fechamento do menu nela) ...
// Exemplo de como fechar o menu na função de filtro:
/*
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            // ... (Lógica de filtro de produtos) ...

            // Fecha o dropdown após a seleção
            menuFiltros.setAttribute('hidden', '');
            btnFiltros.setAttribute('aria-expanded', 'false');
            
            // 🔑 Volta a seta para baixo
            chevronIcon.classList.remove('ri-arrow-up-s-line');
            chevronIcon.classList.add('ri-arrow-down-s-line');
        });
    });
*/