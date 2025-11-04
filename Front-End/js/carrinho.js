// Dados simulados do carrinho (idealmente viriam de um servidor)
const carrinhoData = [
    {
        mercado: "Roldão",
        itens: [
            { id: 1, nome: "Manga Tommy", preco: 7.00, precoAntigo: 15.00, img: "/src/assets/img/img-produtos/manga.svg", quantidade: 2 },
            { id: 2, nome: "Banana Prata", preco: 5.50, precoAntigo: 8.00, img: "/src/assets/img/img-produtos/banana.svg", quantidade: 1 },
            { id: 3, nome: "Pão de Forma", preco: 9.90, precoAntigo: 12.50, img: "/src/assets/img/img-carrinho/pao.png", quantidade: 3 }
        ]
    },
    {
        mercado: "Carrefour",
        itens: [
            { id: 4, nome: "Leite Integral", preco: 4.20, precoAntigo: 5.00, img: "/src/assets/img/img-carrinho/leite.jpeg", quantidade: 4 },
            { id: 5, nome: "Ovo Branco DZ", preco: 18.00, precoAntigo: 20.00, img: "/src/assets/img/img-carrinho/ovo.jpg", quantidade: 1 }
        ]
    },
    {
        mercado: "Assaí Atacadista",
        itens: [
            { id: 6, nome: "Arroz 5kg", preco: 25.00, precoAntigo: 28.00, img: "/src/assets/img/img-carrinho/arroz.webp", quantidade: 1 },
            { id: 7, nome: "Óleo de Soja", preco: 7.50, precoAntigo: 9.00, img: "/src/assets/img/img-carrinho/oleo.webp", quantidade: 2 }
        ]
    }
];

let mercadoAtualIndex = 0; // Índice para saber qual mercado está sendo exibido

// Variáveis para os elementos de resumo e grid
const mercadoGrid = document.querySelector('.mercado-grid');
const nextMercadoBtn = document.querySelector('.next-mercado-btn');
const subtotalValueElement = document.querySelector('.valores-a-pagar .summary-line:nth-child(2) .value');
const totalValueElement = document.querySelector('.valores-a-pagar .total-value');
const taxaEntrega = 7.00;
const taxaServico = 1.00;

/**
 * 1. Função Auxiliar para formatação de moeda
 */
function formatarMoeda(valor) {
    // Garante duas casas decimais e formata como Real Brasileiro
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

/**
 * 2. Atualiza o resumo de valores
 */
function atualizarResumo() {
    // Calcula o subtotal de TODOS os mercados
    let subtotalGeral = 0;

    carrinhoData.forEach(mercado => {
        subtotalGeral += mercado.itens.reduce((acc, item) => {
            return acc + (item.preco * item.quantidade);
        }, 0);
    });

    const valorTotal = subtotalGeral + taxaEntrega + taxaServico;

    // Atualiza o DOM
    subtotalValueElement.textContent = formatarMoeda(subtotalGeral);
    totalValueElement.textContent = formatarMoeda(valorTotal);
}

/**
 * 3. Cria o HTML de um Card de Produto
 */
function criarCartCardHTML(item) {
    return `
        <div class="cart-card" data-item-id="${item.id}" data-item-preco="${item.preco}">
            <div class="item-img">
                <img src="${item.img}" alt="${item.nome}">
            </div>
            <div class="item-details">
                <span class="item-name">${item.nome}</span>
                <span class="nome-mercado">Mercado: ${carrinhoData[mercadoAtualIndex].mercado}</span>
                <div class="preco-wrapper"> 
                    <span class="preco-atual">${formatarMoeda(item.preco)}</span>
                    <span class="preco-antigo">${formatarMoeda(item.precoAntigo)}</span>
                </div>
            </div>
            <div class="controle-quantidade">
                <button class="lixo" aria-label="Remover unidade"><i class="ri-delete-bin-6-line"></i></button>
                <span class="quantitdade-item">${item.quantidade}</span>
                <button class="add" aria-label="Adicionar unidade"><i class="ri-add-line"></i></button>
            </div>
        </div>
    `;
}

/**
 * 4. Renderiza os cards do mercado atual
 */
function renderizarCarrinho() {
    const mercadoAtual = carrinhoData[mercadoAtualIndex];
    
    // 1. Renderiza o nome do mercado no header
    const mercadoSpans = document.querySelectorAll('.nome-mercado');
    mercadoSpans.forEach(span => {
        span.textContent = `Mercado: ${mercadoAtual.mercado}`;
    });
    
    // 2. Renderiza os cards de produto
    mercadoGrid.innerHTML = '';
    
    if (mercadoAtual.itens.length === 0) {
        // Exibe uma mensagem se não houver itens
        mercadoGrid.innerHTML = '<p style="grid-column: 1 / -2; text-align: center; color: #ff4b33; padding: 15px 0px 10px;">Nenhum item neste mercado. 🛒</p>';
    } else {
        const cartCardsHTML = mercadoAtual.itens.map(item => criarCartCardHTML(item)).join('');
        mercadoGrid.innerHTML = cartCardsHTML;
    }

    // 3. Adiciona os event listeners aos novos botões
    adicionarEventListenersAosCards();
    
    // 4. Atualiza o resumo de valores
    atualizarResumo();
}

/**
 * 5. Gerencia a quantidade do item (Adicionar ou Remover)
 */
function gerenciarQuantidade(event, acao) {
    const button = event.currentTarget;
    const cartCard = button.closest('.cart-card');
    const itemId = parseInt(cartCard.dataset.itemId);
    const itemPreco = parseFloat(cartCard.dataset.itemPreco);
    const quantidadeSpan = cartCard.querySelector('.quantitdade-item');
    
    // Encontra o item nos dados
    const mercado = carrinhoData[mercadoAtualIndex];
    const itemIndex = mercado.itens.findIndex(item => item.id === itemId);

    if (itemIndex > -1) {
        let novaQuantidade = mercado.itens[itemIndex].quantidade;

        if (acao === 'adicionar') {
            novaQuantidade++;
        } else if (acao === 'remover') {
            novaQuantidade--;
        }

        if (novaQuantidade > 0) {
            // Atualiza a quantidade nos dados e na tela
            mercado.itens[itemIndex].quantidade = novaQuantidade;
            quantidadeSpan.textContent = novaQuantidade;
        } else {
            // Remove o item se a quantidade for 0
            mercado.itens.splice(itemIndex, 1);
            cartCard.remove(); // Remove o card do DOM
        }

        // Atualiza o resumo
        atualizarResumo();
        
        // Se a lista do mercado atual ficar vazia, renderiza novamente (para mostrar a mensagem de vazio)
        if (mercado.itens.length === 0) {
            renderizarCarrinho();
        }
    }
}

/**
 * 6. Navega para o próximo mercado
 */
function navegarMercado() {
    // Incrementa o índice, voltando para o início se chegar ao final do array
    mercadoAtualIndex = (mercadoAtualIndex + 1) % carrinhoData.length;
    renderizarCarrinho();
}


/**
 * 7. Adiciona os Event Listeners (chamado após a renderização)
 */
function adicionarEventListenersAosCards() {
    // Event Listeners para botões de Adicionar
    document.querySelectorAll('.controle-quantidade .add').forEach(button => {
        button.addEventListener('click', (e) => gerenciarQuantidade(e, 'adicionar'));
    });

    // Event Listeners para botões de Lixeira (Remover)
    document.querySelectorAll('.controle-quantidade .lixo').forEach(button => {
        button.addEventListener('click', (e) => gerenciarQuantidade(e, 'remover'));
    });
}

/**
 * 8. Inicialização: Chama o event listener do botão de próxima lista
 */
function iniciarCarrinho() {
    // Event Listener para o botão de Próximo Mercado
    if (nextMercadoBtn) {
        nextMercadoBtn.addEventListener('click', navegarMercado);
    }
    
    // Renderiza o carrinho inicial com os dados do primeiro mercado
    renderizarCarrinho();
}

// Inicia a aplicação
document.addEventListener('DOMContentLoaded', iniciarCarrinho);