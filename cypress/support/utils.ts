import { TrelloApi } from "./trelloApi";
import TestState from "./testState";

export function fetchOrCreateResource(
  resourceType: "Board" | "List" | "Card",
  apiKey: string,
  apiToken: string,
  identifier: string
): Cypress.Chainable<any> {
  switch (resourceType) {
    case "Board":
      return TrelloApi.readBoards(apiKey, apiToken).then((response) => {
        if (response.body.length > 0) {
          const boardId = response.body[0].id;
          TestState.getInstance().setBoardId(boardId);
        } else {
          return TrelloApi.createBoard(
            apiKey,
            apiToken,
            "Default Board",
            identifier
          ).then((createResponse) => {
            TestState.getInstance().setBoardId(createResponse.body.id);
          });
        }
      });

    case "List":
      return TrelloApi.readLists(apiKey, apiToken, identifier).then(
        (response) => {
          if (response.body.length > 0) {
            const listId = response.body[0].id;
            TestState.getInstance().setListId(listId);
          } else {
            return TrelloApi.createList(
              apiKey,
              apiToken,
              "Default List",
              identifier
            ).then((createResponse) => {
              TestState.getInstance().setListId(createResponse.body.id);
            });
          }
        }
      );

    case "Card":
      return TrelloApi.readCards(apiKey, apiToken, identifier).then(
        (response) => {
          if (response.body.length > 0) {
            const cardId = response.body[0].id;
            TestState.getInstance().setCardId(cardId);
          } else {
            return TrelloApi.createCard(
              apiKey,
              apiToken,
              identifier,
              "Default Card"
            ).then((createResponse) => {
              TestState.getInstance().setCardId(createResponse.body.id);
            });
          }
        }
      );

    default:
      throw new Error("Invalid resource type");
  }
}

// Função para inicializar o estado com Board e List
export function initializeBoardAndList(
  apiKey: string,
  apiToken: string
): Cypress.Chainable<any> {
  return fetchOrCreateResource(
    "Board",
    apiKey,
    apiToken,
    Cypress.env('CYPRESS_ORG_ID')
  ).then(() => {
    const boardId = TestState.getInstance().getBoardId();
    if (boardId) {
      return fetchOrCreateResource("List", apiKey, apiToken, boardId);
    } else {
      throw new Error("Board ID não encontrado.");
    }
  });
}

// Função para deletar todos os boards
export function deleteAllBoards(
  apiKey: string,
  apiToken: string
): Cypress.Chainable<any> {
  return TrelloApi.readBoards(apiKey, apiToken).then((response) => {
    expect(response.status).to.eq(200);
    const boards = response.body;

    if (boards.length > 0) {
      const boardId = boards[0].id;
      return TrelloApi.deleteBoard(apiKey, apiToken, boardId).then(
        (deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
          cy.log(`Board ID: ${boardId} deletado com sucesso.`);

          // Chamar recursivamente para deletar o próximo board
          return deleteAllBoards(apiKey, apiToken);
        }
      );
    } else {
      cy.log("Não existem mais boards para serem excluídos.");
    }
  });
}

// Função para deletar todos os cards em uma lista
export function deleteAllCards(
  apiKey: string,
  apiToken: string,
  listId: string
): Cypress.Chainable<any> {
  return TrelloApi.readCards(apiKey, apiToken, listId).then((response) => {
    expect(response.status).to.eq(200);
    const cards = response.body;

    if (cards.length > 0) {
      const cardId = cards[0].id;
      return TrelloApi.deleteCard(apiKey, apiToken, cardId).then(
        (deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
          cy.log(`Card ID: ${cardId} deletado com sucesso.`);

          // Chamar recursivamente para deletar o próximo card
          return deleteAllCards(apiKey, apiToken, listId);
        }
      );
    } else {
      cy.log("Não existem mais cards para serem excluídos.");

      // Criar e deletar um card temporário para garantir que a exclusão funcione
      return TrelloApi.createCard(
        apiKey,
        apiToken,
        listId,
        "Card Temporário"
      ).then((createResponse) => {
        expect(createResponse.status).to.eq(200);
        const newCardId = createResponse.body.id;
        cy.log(
          `Card temporário criado com ID: ${newCardId}. Agora deletando...`
        );

        return TrelloApi.deleteCard(apiKey, apiToken, newCardId).then(
          (deleteResponse) => {
            expect(deleteResponse.status).to.eq(200);
            cy.log(`Card temporário ID: ${newCardId} deletado com sucesso.`);
          }
        );
      });
    }
  });
}
