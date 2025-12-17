📝 Odoo 17 – To-do App com OWL

Projeto de estudo e consolidação prática do OWL (Odoo Web Library) no Odoo 17, focado em arquitetura moderna de frontend, componentização e integração completa com o ORM via RPC.

Este repositório representa a transição consciente do modelo clássico (QWeb / JS imperativo) para o paradigma reativo e baseado em componentes adotado oficialmente pelo Odoo a partir das versões recentes.

---
🎯 Objetivo do Projeto
Construir um módulo simples, porém arquiteturalmente correto, que demonstre:
CRUD completo via OWL
Comunicação clara entre JS ↔ XML
Uso correto de state reativo
Integração com ORM do Odoo via RPC
Componentização com props
Organização semelhante ao core do Odoo 17

---
🚀 Funcionalidades Implementadas
✅ Listagem de tarefas (READ)
✅ Criação de tarefas em tempo real (CREATE)
✅ Marcar tarefa como concluída (is_done) (UPDATE)
✅ Remoção de tarefas (DELETE)
✅ Interface reativa (sem reload)
✅ Estilização básica (CSS customizado)
✅ Componentização OWL

---
🧠 Conceitos Técnicos Consolidados
OWL / Frontend
Component
useState
props
Componentes Pai → Filho
Reatividade automática
Templates OWL (t-name, t-foreach, t-if)
Eventos (t-on-click, t-model)
Ciclo de vida de componentes
Backend / Integração
ORM via JS (searchRead, create, write, unlink)
Respeito às regras de segurança do Odoo
Separação clara entre lógica de negócio e apresentação

---
🧩 Arquitetura do Projeto

Estrutura simplificada do módulo:

odoo_todo_owl/
├── models/
│   └── todo_task.py
├── views/
│   └── menu.xml
├── static/
│   └── src/
│       ├── js/
│       │   ├── TodoApp.js        # Componente container
│       │   ├── TodoInput.js      # Input + botão (props)
│       │   └── TodoItem.js       # Item da lista (props)
│       ├── xml/
│       │   └── todo_templates.xml
│       └── css/
│           └── todo.css
├── __manifest__.py
└── __init__.py
Fluxo de Comunicação
Usuário → Evento no XML
        → Método JS
        → ORM (RPC)
        → Atualização do State
        → Re-render automático do XML

---
⚙️ Tecnologias Utilizadas
Odoo 17
OWL (Odoo Web Library)
JavaScript moderno (ES6+)
Python (ORM Odoo)
XML (Templates OWL)
CSS

---

🏗️ Como Executar o Projeto

Clone este repositório para seu addons_path

Atualize a lista de módulos no Odoo

Instale o módulo To-do Interno OWL

Acesse o menu:
To-do OWL → To-do Interno

---
Gabriel Eduardo
Desenvolvedor Full-Stack | Odoo | Python | JavaScript

Projeto criado com foco em aprendizado profundo, boas práticas e alinhamento com a arquitetura oficial do Odoo 17.