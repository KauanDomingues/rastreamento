# Rastro - Site de Rastreamento de Encomendas

## Descrição
Aplicação simples para rastrear encomendas a partir de códigos fornecidos por transportadoras. O usuário pode adicionar códigos, visualizar o status atualizado e receber notificações sobre mudanças importantes na entrega.

---

## Product Backlog

| ID | Prioridade | User Story | Estimativa (h) |
|----|------------|------------|----------------|
| 1 | Alta | Como usuário, quero cadastrar um código de rastreio para acompanhar minha encomenda | 4 |
| 2 | Alta | Como usuário, quero consultar o status da encomenda via API para saber onde ela está | 8 |
| 3 | Média | Como usuário, quero visualizar uma lista de encomendas salvas para acompanhar várias entregas | 6 |
| 4 | Média | Como usuário, quero que o status seja atualizado automaticamente para não precisar consultar manualmente | 10 |
| 5 | Baixa | Como usuário, quero criar uma conta e fazer login com email e senha para acessar minhas encomendas | 8 |

---

## Sprint Backlog

### Sprint 1

| ID | Prioridade | Tarefa | Estimativa (h) |
|----|------------|--------|----------------|
| 1 | Alta | Definir fluxo de telas do aplicativo | 2 |
| 2 | Alta | Criar protótipo de interface no Figma ([link](https://www.figma.com/proto/taQiihR4C5jJAiqhZsHCUK/Rastra?node-id=1-2&p=f&t=xnim9vqAOa65TFF5-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&hide-ui=1)) | 4 |
| 3 | Média | Validar protótipo e ajustar layout | 2 |

### Sprint 2

| ID | Prioridade | Tarefa | Estimativa (h) |
|----|------------|--------|----------------|
| 4 | Alta | Implementar tela de cadastro de código | 4 |
| 5 | Alta | Implementar tela de listagem de encomendas | 4 |
| 6 | Média | Criar estrutura de armazenamento local (estado/banco) | 3 |

### Sprint 3

| ID | Prioridade | Tarefa | Estimativa (h) |
|----|------------|--------|----------------|
| 7 | Alta | Integrar API de rastreamento | 6 |
| 8 | Média | Implementar atualização automática de status | 4 |
| 9 | Baixa | Implementar autenticação (cadastro e login com email e senha) | 6 |
