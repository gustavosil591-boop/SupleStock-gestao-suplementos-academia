# 🏋️‍♂️ Sistema de Gestão de Suplementos para Academias

> **Status do Projeto:** Em Desenvolvimento

## 🎯 Objetivo do Projeto
Desenvolver um aplicativo funcional de controle de suplementos voltado para academias. O sistema permitirar cadastrar produtos, registrar entradas e saídas, acompanhar o nível de estoque e apoiar a organização das vendas de forma simples e prática e terá ícones de alerta de válidade como "produto dentro do prazo", "produto prestes a se vencer" e "produto vencido", com isso o íntuito é tentar reduzir perdas.

## 👥 Equipe de Desenvolvimento
Projeto desenvolvido para a disciplina de Engenharia de Software.
* Antônio Gustavo Gomes Silva
* Dário Higino da Silva
* Roberth Ravell Lima Barros

## 🚀 Funcionalidades
- [x] Documentação e Setup do Projeto
- [x] Cadastro de Suplementos (Nome, categoria, quantidade, lote, etc.)
- [ ] Visualização de Estoque em tempo real
- [ ] Separação e filtragem por Categoria
- [ ] Registro de Movimentações (Entradas/Saídas)

## 🚀 Funcionalidades  Adicionais

* **Painel Principal:** Identificação instantânea do status dos lotes através de alertas visuais por cores:
  * 🔴 **Vermelho:** Produtos já vencidos.
  * 🟡 **Amarelo:** Produtos na janela crítica de proximidade do vencimento.
  * 🟢 **Verde:** Produtos dentro do prazo.
* **Gestão de Inventário por Lotes:** Cadastro detalhado de suplementos vinculando quantidades exatas às suas respectivas datas de vencimento.

## 🛠️ Tecnologias Utilizadas
* **Ferramenta de Design:** Figma (Prototipagem)
* **Ambiente de desenvolvimento:** Github Codespace
* **Ospedagem do Site:** Vercel (será usado futuramente)

## Link de Acompanhamento
O gerenciamento de tarefas, divisões da Sprint e acompanhamento do progresso da equipe foram organizados através do trello 
- Trello: https://trello.com/invite/b/69ff74d87c9be7c29333872d/ATTIdfc39977dd0b351d878ffeeffea18f23DDB4135C/projeto-engenharia-de-software-suplementos
- Documento de Requisitos: [[ES 2026] Documento de Requisitos - Sistema de Gestão de Suplementos para Academias 1.pdf](https://github.com/user-attachments/files/28181940/ES.2026.Documento.de.Requisitos.-.Sistema.de.Gestao.de.Suplementos.para.Academias.1.pdf)


## 🎨 Protótipo da Interface
O design e o fluxo de navegação do sistema foram desenvolvidos utilizando o Figma.

* [ Acesse aqui o protótipo no Figma] https://www.figma.com/design/sPt083frERAg2Iny4ttnAq/SupleStock--ES?node-id=0-1&t=3oJhx0GsbNrZy3px-1

### Telas principais que serão desenvolvidas

### Tela de Login:
![alt text](1005b678-9398-4946-b2bd-5090319965a5.jpg)

### Tela Principla:
![alt text](9b1cb9b7-22b1-447a-a845-3be98d72a7b0.jpg)

> 💡 *Nota de Design: A tela principal foi projetada com foco em usabilidade (IHC), contando com alertar sobre produtos vencidos ou próximos do vencimento.*

### Tela de Cadastro de Usuário:
![alt text](c59f9184-1398-412a-83ac-a8e7d9966e76.jpg)

## 🚀 Como Executar o Projeto Localmente

Como a aplicação primeiramente foi desenvolvida em tecnologias web nativas (HTML, CSS e JavaScript) para demosntrarmos como o sistema iria funcionar na prática. Então você não precisa instalar nenhuma dependência pesada (como Node.js ou Java) para testá-la. Siga o que se fala abaixo:

- aperte com botão esquerdo do mouse em cima do arquivo "index.html", em seguinda selecione a opção "mostrar versão prévia", depois é só abrir no navegador para verificar a base do sistema.

## 🚀 Próximos Passos (Sprint 2)
* Integração com Banco de Dados persistente para armazenamento real dos produtos.
* Implementação do sistema de filtragem de suplementos por categoria dinamicamente na tabela.
* Alerta de produtos perto da válidade.'

## 📅 Sprints
* **Sprint 1 (18/05 a 31/05):** Estruturação, requisitos e controle básico, (Cadastro e Estoque), telas no figma.
* **Sprint 2 (01/06 a 14/06):** Categorização, registro de movimentações e infraestrutura de banco de dados.
* **Sprint 3 (15/06 a 28/06):** Finalização, testes e documentação final.
