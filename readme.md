
# Projeto Trello

## Pré-requisitos

Antes de executar o projeto, certifique-se de que você tem o [Node.js](https://nodejs.org/) e [Yarn](https://classic.yarnpkg.com/en/docs/install) instalados.

### 1. Verificar e Instalar Node.js

Para verificar se o Node.js está instalado, use o comando:

```sh
node -v # Para verificar a versão do npm: 
```

Se o Node.js ou npm não estiver instalado, baixe e instale o Node.js, que inclui o npm.

Para instalar Node.js:

Windows/Mac: Baixe o instalador apropriado do site oficial do Node.js e siga as instruções de instalação.

Linux: Utilize um gerenciador de pacotes como nvm (Node Version Manager):

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
source ~/.bashrc
nvm install node
```
### 2. Verificar e Instalar Yarn (Opcional)
Para verificar se o Yarn está instalado, use o comando:

```sh
yarn -v # Se o Yarn não estiver instalado, você pode instalá-lo globalmente via npm:

npm install -g yarn #Para mais detalhes sobre a instalação do Yarn, visite a documentação oficial.
```
### 3. Clonar o Projeto

Clone o repositório do projeto usando o comando:

```sh
git clone https://github.com/railimarlx7/trello.git
cd trello
````

### 4. Instalar Dependências
Instale as dependências do projeto usando Yarn:

```sh
yarn install
```
### 5. Executar Testes
Para executar os testes com Cypress em modo headless, use:

```sh
yarn test #Isso executará os testes em modo headless, ou seja, sem abrir um navegador.
```
### 6. Visualizar Execução no Navegador
Para visualizar a execução dos testes no navegador, use:

```sh
yarn cypress:open # 
Isso abrirá o Cypress Test Runner no navegador padrão, permitindo que você veja a execução dos testes em tempo real.
```
### Reexecutar o GitHub Actions
Se você precisar reexecutar um workflow do GitHub Actions, siga estes passos:
 - Vá para a aba "Actions" do seu repositório no GitHub:
 - Navegue até a aba "Actions" no seu repositório para ver a lista de workflows executados.
 - Encontre o Workflow Desejado:
    Localize o workflow que você deseja reexecutar. Pode ser um workflow          específico associado a um commit ou a uma Pull Request.
- Reexecute o Workflow:
    Clique no workflow desejado para abrir a página de detalhes.
    Clique no botão "Re-run jobs" (ou "Re-run all jobs") no canto superior direito.

Isso fará com que o GitHub Actions reexecute o workflow.

### Estrutura do projeto

#### Descrição dos Arquivos e Pastas
- cypress/: Diretório principal para todos os arquivos relacionados ao Cypress.
- fixtures/:  Contém arquivos de dados estáticos usados nos testes, como respostas de API simuladas ou dados de entrada de teste.
- integration/: Armazena os arquivos de teste e2e principais. A subpasta trello/ organiza os testes por contexto ou funcionalidade.
- createBoard.cy.ts: Teste para a criação de boards no Trello.
- createCard.cy.ts: Teste para a criação de cards em listas.
- createList.cy.ts: Teste para a criação de listas em boards.
- deleteBoard.cy.ts: Teste para a exclusão de boards.
- deleteCard.cy.ts: Teste para a exclusão de cards em listas.
- plugins/: Configura plugins personalizados para estender as funcionalidades do Cypress.
- support/: Contém arquivos de suporte e configuração do Cypress.
- commands.ts: Define comandos personalizados do Cypress.
- testState.ts: Gerencia o estado de teste (IDs de board, lista e card).
- trelloApi.ts: Funções para interações com a API do Trello, como criar, ler, atualizar e deletar recursos.
- utils.ts: Funções utilitárias para operações comuns nos testes.
- index.ts: Arquivo de suporte principal, geralmente inicializa comandos e configurações globais.
- types/: Definições de tipos TypeScript para garantir a consistência e segurança de tipos durante o desenvolvimento.
- cypress.json: Arquivo de configuração principal do Cypress (JSON).
- cypress.config.ts: Arquivo de configuração adicional do Cypress em TypeScript.
- package.json: Arquivo de configuração do npm, define dependências, scripts e outras configurações.
- tsconfig.json: Arquivo de configuração do TypeScript.
- yarn.lock: Arquivo de lock do Yarn, garantindo que as mesmas versões de dependências sejam instaladas em todas as instalações.

