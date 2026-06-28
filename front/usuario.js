const form = document.getElementById("userForm");
const tabela = document.getElementById("usuariosTabela");
const filtroPerfil = document.getElementById("filtroPerfil");

let usuarios = JSON.parse(localStorage.getItem("usuariosSupleStock")) || [];

function renderizarTabela() {
    tabela.innerHTML = "";
    const perfilSelecionado = filtroPerfil.value;

    const usuariosFiltrados =
        perfilSelecionado === "Todos"
            ? usuarios
            : usuarios.filter(
                usuario => usuario.perfil === perfilSelecionado
            );

    if (usuariosFiltrados.length === 0) {
        tabela.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; color:#aaa; padding:24px;">
                    Nenhum usuário cadastrado.
                </td>
            </tr>
        `;
        return;
    }

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
                    </span>
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

    localStorage.setItem("usuariosSupleStock", JSON.stringify(usuarios));

    renderizarTabela();
    form.reset();
    alert("Usuário cadastrado com sucesso!");
});

filtroPerfil.addEventListener("change", renderizarTabela);