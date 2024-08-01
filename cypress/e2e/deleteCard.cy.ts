// cypress/e2e/deleteCard.cy.ts

import { initializeBoardAndList, deleteAllCards } from "../support/utils";
import TestState from "../support/testState";

describe("Trello API - Delete All Cards", () => {
  const apiKey = Cypress.env("apiKey");
  const apiToken = Cypress.env("apiToken");

  before(() => {
    // Inicializar o estado com boardId e listId, criando-os se necessário
    initializeBoardAndList(apiKey, apiToken);
  });

  it("should delete all cards in the list", () => {
    const listId = TestState.getInstance().getListId();

    if (!listId) {
      throw new Error(
        "List ID não encontrado. Certifique-se de que a lista foi criada corretamente."
      );
    }

    // Iniciar o processo de exclusão de todos os cards
    deleteAllCards(apiKey, apiToken, listId);
  });
});
