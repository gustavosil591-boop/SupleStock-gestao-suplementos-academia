const API_URL = 'https://special-umbrella-5g777xrqr7pqf45v4-3000.app.github.dev/suplementos';


const form = document.getElementById('form-suplemento');
const tabelaCorpo = document.getElementById('tabela-corpo');
const filtroCat = document.getElementById('filtro-categoria');
const mensagemEl = document.getElementById('mensagem');

async function carregarEstoque() {
    try {
        let resposta = await fetch(API_URL);
        let produtos = await resposta.json();

        let categoriaSelecionada = filtroCat.value;

        if (categoriaSelecionada !== 'Todas') {
            produtos = produtos.filter(function(p) {
                return p.categoria === categoriaSelecionada;
            });
        }

        tabelaCorpo.innerHTML = '';

        if (produtos.length === 0) {
            tabelaCorpo.innerHTML = '<tr><td colspan="8" style="text-align:center;">Nenhum produto encontrado.</td></tr>';
            return;
        }

        produtos.forEach(function(produto) {
            let linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>${produto.quantidade}</td>
                <td>R$ ${Number(produto.precoCusto).toFixed(2)}</td>
                <td>R$ ${Number(produto.precoVenda).toFixed(2)}</td>
                <td>${produto.lote}</td>
                <td>${produto.validade}</td>
                <td>
                    <button class="btn-excluir" onclick="excluirProduto(${produto.id})">Excluir</button>
                </td>
            `;
            tabelaCorpo.appendChild(linha);
        });

    } catch (erro) {
        console.error('Erro ao carregar estoque:', erro);
        tabelaCorpo.innerHTML = '<tr><td colspan="8" style="text-align:center; color:red;">Erro ao conectar com o servidor. Verifique se o JSON-Server está rodando.</td></tr>';
    }
}

form.addEventListener('submit', async function(evento) {
    evento.preventDefault();

    let novoSuplemento = {
        nome: document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        quantidade: document.getElementById('quantidade').value,
        precoCusto: document.getElementById('precoCusto').value,
        precoVenda: document.getElementById('precoVenda').value,
        lote: document.getElementById('lote').value,
        validade: document.getElementById('validade').value
    };

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoSuplemento)
        });

        form.reset();
        mostrarMensagem('Produto cadastrado com sucesso!', 'green');
        carregarEstoque();

    } catch (erro) {
        console.error('Erro ao cadastrar:', erro);
        mostrarMensagem('Erro ao cadastrar. Verifique o servidor.', 'red');
    }
});

async function excluirProduto(id) {
    if (!confirm('Deseja excluir este produto?')) return;

    try {
        await fetch(API_URL + '/' + id, { method: 'DELETE' });
        carregarEstoque();

    } catch (erro) {
        console.error('Erro ao excluir:', erro);
        alert('Erro ao excluir o produto.');
    }
}

function mostrarMensagem(texto, cor) {
    mensagemEl.textContent = texto;
    mensagemEl.style.display = 'block';
    mensagemEl.style.backgroundColor = cor === 'green' ? '#d4edda' : '#f8d7da';
    mensagemEl.style.color = cor === 'green' ? '#155724' : '#721c24';
    mensagemEl.style.border = '1px solid ' + (cor === 'green' ? '#c3e6cb' : '#f5c6cb');

    setTimeout(function() {
        mensagemEl.style.display = 'none';
    }, 3000);
}

filtroCat.addEventListener('change', function() {
    carregarEstoque();
});

carregarEstoque();