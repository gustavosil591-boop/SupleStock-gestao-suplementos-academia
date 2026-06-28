import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    doc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6dz1GREueNHbvlBqDAxOky2OZ89zzLTU",
    authDomain: "gest-c9436.firebaseapp.com",
    projectId: "gest-c9436",
    storageBucket: "gest-c9436.firebasestorage.app",
    messagingSenderId: "631199034647",
    appId: "1:631199034647:web:94b7fc0bdf2155cd365b52",
    measurementId: "G-1ZN2TYMV4N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('form-suplemento');
const tabelaCorpo = document.getElementById('tabela-corpo');
const filtroCat = document.getElementById('filtro-categoria');
const mensagemEl = document.getElementById('mensagem');

function getValidadeBadge(validade) {
    const hoje = new Date();
    const dataValidade = new Date(validade);
    const diffDias = Math.ceil((dataValidade - hoje) / (1000 * 60 * 60 * 24));

    if (diffDias < 0) {
        return `<span class="badge badge-vencido">Vencido<small>${validade}</small></span>`;
    } else if (diffDias <= 30) {
        return `<span class="badge badge-proximo">Próximo do Vencimento<small>${validade}</small></span>`;
    } else {
        return `<span class="badge badge-ok">No Prazo<small>${validade}</small></span>`;
    }
}

async function carregarEstoque() {
    try {
        const querySnapshot = await getDocs(collection(db, "suplementos"));
        let produtos = [];
        
        querySnapshot.forEach((doc) => {
            produtos.push({ id: doc.id, ...doc.data() });
        });

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
                <td>${getValidadeBadge(produto.validade)}</td>
                <td><button class="btn-excluir">Excluir</button></td>
            `;

            linha.querySelector('.btn-excluir').addEventListener('click', function() {
                excluirProduto(produto.id);
            });

            tabelaCorpo.appendChild(linha);
        });

    } catch (erro) {
        console.error('Erro ao carregar estoque:', erro);
        tabelaCorpo.innerHTML = '<tr><td colspan="8" style="text-align:center; color:red;">Erro ao conectar com o banco de dados do Firebase.</td></tr>';
    }
}

form.addEventListener('submit', async function(evento) {
    evento.preventDefault();

    let novoSuplemento = {
        nome: document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        quantidade: parseInt(document.getElementById('quantidade').value),
        precoCusto: parseFloat(document.getElementById('precoCusto').value),
        precoVenda: parseFloat(document.getElementById('precoVenda').value),
        lote: document.getElementById('lote').value,
        validade: document.getElementById('validade').value
    };

    try {
        await addDoc(collection(db, "suplementos"), novoSuplemento);

        form.reset();
        mostrarMensagem('Produto cadastrado com sucesso!', 'green');
        carregarEstoque();

    } catch (erro) {
        console.error('Erro ao cadastrar:', erro);
        mostrarMensagem('Erro ao cadastrar no Firebase.', 'red');
    }
});

async function excluirProduto(id) {
    if (!confirm('Deseja excluir este produto?')) return;

    try {
        await deleteDoc(doc(db, "suplementos", id));
        carregarEstoque();

    } catch (erro) {
        console.error('Erro ao excluir:', erro);
        alert('Erro ao excluir o produto do Firebase.');
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