// cypress/e2e/deleteCard.cy.ts

import { initializeBoardAndList, deleteAllCards } from "../support/utils";
import TestState from "../support/testState";

describe("Trello API - Delete All Cards", () => {
  const apiKey = Cypress.env('CYPRESS_API_KEY');
  const apiToken = Cypress.env('CYPRESS_API_TOKEN');

  before(() => {
    // Inicializar o estado com boardId e listId, criando-os se necessário
    initializeBoardAndList(apiKey, apiToken);
  });

  it("should delete all cards in the list", () => {
    const listId = TestState.getInstance().getListId();

    if (!listId) {
      throw new Error("List ID não encontrado.");
    }

    deleteAllCards(apiKey, apiToken, listId);
  });
});
