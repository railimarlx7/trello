trello/
├── cypress/                       # Diretório principal para todos os arquivos relacionados ao Cypress.
│   ├── fixtures/                  # Pasta para arquivos de dados fixos usados nos testes.
│   │   └── example.json           # Exemplo de um arquivo fixture contendo dados estáticos.
│   ├── integration/               # Pasta principal para os arquivos de testes e2e.
│   │   └── trello/                # Subpasta específica para testes relacionados ao Trello.
│   │       ├── createBoard.cy.ts  # Teste e2e para a criação de boards no Trello.
│   │       ├── createCard.cy.ts   # Teste e2e para a criação de cards em listas.
│   │       ├── createList.cy.ts   # Teste e2e para a criação de listas em boards.
│   │       ├── deleteBoard.cy.ts  # Teste e2e para a exclusão de boards.
│   │       └── deleteCard.cy.ts   # Teste e2e para a exclusão de cards em listas.
│   ├── plugins/                   # Diretório para plugins customizados do Cypress.
│   │   └── index.js               # Arquivo padrão para configuração de plugins.
│   ├── support/                   # Pasta para arquivos de suporte e configuração.
│   │   ├── commands.ts            # Define comandos personalizados do Cypress.
│   │   ├── testState.ts           # Gerencia o estado de teste (IDs de board, lista e card).
│   │   ├── trelloApi.ts           # Interações com a API do Trello, como criar, ler, atualizar e deletar recursos.
│   │   ├── utils.ts               # Funções utilitárias para operações comuns nos testes.
│   │   └── index.ts               # Arquivo principal de suporte, geralmente inicializa comandos e configurações globais.
│   ├── types/                     # Diretório para definições de tipos TypeScript.
│   │   └── trello.d.ts            # Tipos TypeScript para os objetos utilizados nos testes do Trello.
│   ├── cypress.json               # Arquivo de configuração do Cypress (JSON).
│   ├── cypress.config.ts          # Arquivo de configuração adicional do Cypress em TypeScript.
├── package.json                   # Arquivo de configuração do npm, define dependências e scripts.
├── tsconfig.json                  # Arquivo de configuração do TypeScript.
└── yarn.lock                      # Arquivo de lock do Yarn para garantir a consistência das dependências.

Descrição dos Arquivos e Pastas
cypress/: Diretório principal para todos os arquivos relacionados ao Cypress.

fixtures/: Contém arquivos de dados estáticos usados nos testes, como respostas de API simuladas ou dados de entrada de teste.
integration/: Armazena os arquivos de teste e2e principais. A subpasta trello/ organiza os testes por contexto ou funcionalidade.
createBoard.cy.ts: Teste para a criação de boards no Trello.
createCard.cy.ts: Teste para a criação de cards em listas.
createList.cy.ts: Teste para a criação de listas em boards.
deleteBoard.cy.ts: Teste para a exclusão de boards.
deleteCard.cy.ts: Teste para a exclusão de cards em listas.
plugins/: Configura plugins personalizados para estender as funcionalidades do Cypress.
support/: Contém arquivos de suporte e configuração do Cypress.
commands.ts: Define comandos personalizados do Cypress.
testState.ts: Gerencia o estado de teste (IDs de board, lista e card).
trelloApi.ts: Funções para interações com a API do Trello, como criar, ler, atualizar e deletar recursos.
utils.ts: Funções utilitárias para operações comuns nos testes.
index.ts: Arquivo de suporte principal, geralmente inicializa comandos e configurações globais.
types/: Definições de tipos TypeScript para garantir a consistência e segurança de tipos durante o desenvolvimento.
cypress.json: Arquivo de configuração principal do Cypress (JSON).
cypress.config.ts: Arquivo de configuração adicional do Cypress em TypeScript.
package.json: Arquivo de configuração do npm, define dependências, scripts e outras configurações.
tsconfig.json: Arquivo de configuração do TypeScript.
yarn.lock: Arquivo de lock do Yarn, garantindo que as mesmas versões de dependências sejam instaladas em todas as instalações.