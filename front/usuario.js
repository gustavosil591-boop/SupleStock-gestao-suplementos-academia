const form = document.getElementById("userForm");
const tabela = document.getElementById("usuariosTabela");
const filtroPerfil = document.getElementById("filtroPerfil");

let usuarios = [];

usuarios.push(
    {
        nome: "Jaqueline Silva",
        email: "jaquelinesilva@gmail.com",
        perfil: "Administrador",
        status: "ATIVO",
        dataCadastro: "14/01/2025"
    },
    {
        nome: "João Silva",
        email: "joao.silva@gmail.com",
        perfil: "Gerente",
        status: "ATIVO",
        dataCadastro: "09/02/2025"
    },
    {
        nome: "Maria Santos",
        email: "maria.santos@gmail.com",
        perfil: "Operador",
        status: "ATIVO",
        dataCadastro: "04/03/2025"
    },
    {
        nome: "Carlos Oliveira",
        email: "carlos.oliveira@gmail.com",
        perfil: "Operador",
        status: "INATIVO",
        dataCadastro: "19/01/2025"
    }
);

renderizarTabela();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const perfil = document.getElementById("perfil").value;
    const senha = document.getElementById("senha").value;

    if (!nome || !email || !perfil || !senha) {
        alert("Preencha todos os campos.");
        return;
    }

    const dataAtual = new Date().toLocaleDateString("pt-BR");

    usuarios.push({
        nome,
        email,
        perfil,
        status: "ATIVO",
        dataCadastro: dataAtual
    });

    renderizarTabela();
    form.reset();
    alert("Usuário cadastrado com sucesso!");
});

filtroPerfil.addEventListener("change", renderizarTabela);

function renderizarTabela() {
    tabela.innerHTML = "";

    const perfilSelecionado = filtroPerfil.value;

    const usuariosFiltrados =
        perfilSelecionado === "Todos"
            ? usuarios
            : usuarios.filter(
                usuario => usuario.perfil === perfilSelecionado
            );

    usuariosFiltrados.forEach(usuario => {

        let perfilClasse = "";

        if (usuario.perfil === "Administrador") {
            perfilClasse = "admin";
        } else if (usuario.perfil === "Gerente") {
            perfilClasse = "manager";
        } else if (usuario.perfil === "Operador") {
            perfilClasse = "operator";
        }

        const statusClasse =
            usuario.status === "ATIVO"
                ? "active"
                : "inactive";

        tabela.innerHTML += `
            <tr>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>
                    <span class="badge ${perfilClasse}">
                        ${usuario.perfil}
                    </span>0
                </td>
                <td>
                    <span class="badge ${statusClasse}">
                        ${usuario.status}
                    </span>
                </td>
                <td>${usuario.dataCadastro}</td>
            </tr>
        `;
    });
}