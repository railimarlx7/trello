import { fetchOrCreateResource } from "../support/utils";
import { TrelloApi } from "../support/trelloApi";
import TestState from "../support/testState";

describe("Trello API - Create List", () => {
  const apiKey = Cypress.env("apiKey");
  const apiToken = Cypress.env("apiToken");

  before(() => {
    // Assegurar que o board esteja presente
    fetchOrCreateResource(
      "Board",
      apiKey,
      apiToken,
      Cypress.env("organizationID")
    );
  });

  it('should create a new list named "Trello List"', () => {
    cy.wrap(null).then(() => {
      const boardId = TestState.getInstance().getBoardId();
      const listName = "Trello List";

      // Verificar se o boardId foi definido corretamente
      if (!boardId) {
        throw new Error(
          "Board ID não encontrado. Certifique-se de que o board foi criado corretamente."
        );
      }

      TrelloApi.createList(apiKey, apiToken, listName, boardId).then(
        (response) => {
          const responseBody = response.body;
          expect(response.status).to.eq(200);
          expect(responseBody.name).to.eq(listName);

          // Logar o ID da nova lista
          cy.log(
            `List ID: ${responseBody.id}, List Name: ${responseBody.name}`
          );
        }
      );
    });
  });
});
