const form = document.getElementById('form-suplemento');
const tabelaCorpo = document.getElementById('tabela-corpo');

function carregarEstoque() {
    let estoque = JSON.parse(localStorage.getItem('suplementos')) || [];
    
    tabelaCorpo.innerHTML = '';

    estoque.forEach(produto => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.categoria}</td>
            <td>${produto.quantidade}</td>
            <td>${produto.validade}</td>
        `;
        tabelaCorpo.appendChild(linha);
    });
}

form.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    let novoSuplemento = {
        nome: document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        quantidade: document.getElementById('quantidade').value,
        validade: document.getElementById('validade').value
    };

    let estoque = JSON.parse(localStorage.getItem('suplementos')) || [];
    estoque.push(novoSuplemento);
    localStorage.setItem('suplementos', JSON.stringify(estoque));

    form.reset();
    carregarEstoque();
});

carregarEstoque();