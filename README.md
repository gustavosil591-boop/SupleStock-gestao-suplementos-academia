# 🏋️‍♂️ Sistema de Gestão de Suplementos para Academias - SupleStock

> **Status do Projeto:** ✅ Concluído


## 🎯 Objetivo do Projeto
Desenvolver um aplicativo funcional de controle de suplementos voltado para academias. O sistema permitirar cadastrar produtos, registrar entradas e saídas, acompanhar o nível de estoque e apoiar a organização das vendas de forma simples e prática e terá ícones de alerta de válidade como "produto dentro do prazo", "produto prestes a se vencer" e "produto vencido", com isso o íntuito é tentar reduzir perdas.

## 👥 Equipe de Desenvolvimento
Projeto desenvolvido para a disciplina de Engenharia de Software.
* Antônio Gustavo Gomes Silva
* Dário Higino da Silva
* Roberth Ravell Lima Barros

## 🚀 Funcionalidades

- [x] Tela de Login com autenticação
- [x] Cadastro de Suplementos (Nome, categoria, quantidade, lote, preço e validade)
- [x] Visualização de Estoque em tempo real
- [x] Filtragem por Categoria
- [x] Exclusão de produtos do estoque
- [x] Alertas visuais de validade por cores
- [x] Cadastro e listagem de Usuários
- [x] Deploy em produção (Vercel)
- [x] Banco de dados persistente (Firestore – Firebase)

## 🚀 Funcionalidades  Adicionais

* **Painel Principal:** Identificação instantânea do status dos lotes através de alertas visuais por cores:
  * 🔴 **Vermelho:** Produtos já vencidos.
  * 🟡 **Amarelo:** Produtos na janela crítica de proximidade do vencimento.
  * 🟢 **Verde:** Produtos dentro do prazo.
* **Gestão de Inventário por Lotes:** Cadastro detalhado de suplementos vinculando quantidades exatas às suas respectivas datas de vencimento.

## 🛠️ Tecnologias Utilizadas
- **Design:** Figma (Prototipagem)
- **Frontend:** HTML, CSS e JavaScript
- **Banco de Dados:** Firebase Firestore
- **Hospedagem:** Vercel
- **Ambiente de Desenvolvimento:** GitHub Codespaces
- **Versionamento:** Git e GitHub
  
## Link de Acompanhamento
O gerenciamento de tarefas, divisões da Sprint e acompanhamento do progresso da equipe foram organizados através do trello 
- Trello: https://trello.com/invite/b/69ff74d87c9be7c29333872d/ATTIdfc39977dd0b351d878ffeeffea18f23DDB4135C/projeto-engenharia-de-software-suplementos
- Documento de Requisitos: [Documento de Requisitos - SupleStock ES (2).pdf](https://github.com/user-attachments/files/28463826/Documento.de.Requisitos.-.SupleStock.ES.2.pdf)


## 🎨 Protótipo da Interface
O design e o fluxo de navegação do sistema foram desenvolvidos utilizando o Figma.

* [ Acesse aqui o protótipo no Figma] https://www.figma.com/design/sPt083frERAg2Iny4ttnAq/SupleStock--ES?node-id=0-1&t=3oJhx0GsbNrZy3px-1

### Telas principais que serão desenvolvidas

### Tela de Login:
![alt text](prototipo/1005b678-9398-4946-b2bd-5090319965a5.jpg)

### Tela Principla:
![alt text](prototipo/9b1cb9b7-22b1-447a-a845-3be98d72a7b0.jpg)

> 💡 *Nota de Design: A tela principal foi projetada com foco em usabilidade (IHC), contando com alertar sobre produtos vencidos ou próximos do vencimento.*

### Tela de Cadastro de Usuário:
![alt text](prototipo/c59f9184-1398-412a-83ac-a8e7d9966e76.jpg)

## 🚀 Link do deploy feito no Vercel
- **Vercel:** https://suple-stock-gestao-suplementos-acad.vercel.app/

## 🚀 Próximos Passos (Sprint 3)
> **concluida**
* Sistema final sem bugs.
* Implementação dos alertas visuais de validade (🔴🟡🟢) na tabela de estoque.
* Tela de login funcional.
* documentação completa e pronto para a apresentação final.

## 📅 Sprints
* **Sprint 1 (18/05 a 31/05):** Estruturação, requisitos e controle básico, (Cadastro e Estoque), telas no figma.
* **Sprint 2 (01/06 a 14/06):** Categorização, registro de movimentações e infraestrutura de banco de dados.
* **Sprint 3 (15/06 a 28/06):** Finalização, testes e documentação final.
