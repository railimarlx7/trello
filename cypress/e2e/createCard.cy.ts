import { fetchOrCreateResource } from '../support/utils';
import { TrelloApi } from '../support/trelloApi';
import TestState from '../support/testState';

describe('Trello API - Create Card', () => {
  const apiKey = Cypress.env('CYPRESS_API_KEY');
  const apiToken = Cypress.env('CYPRESS_API_TOKEN');

  before(() => {
    // Assegurar que o board e a list estejam presentes
    fetchOrCreateResource('Board', apiKey, apiToken, Cypress.env('CYPRESS_ORG_ID'))
      .then(() => {
        const boardId = TestState.getInstance().getBoardId();
        return fetchOrCreateResource('List', apiKey, apiToken, boardId!);
      });
  });

  it('should create a new card named "Trello Card"', () => {
    cy.wrap(null).then(() => {
      const listId = TestState.getInstance().getListId();
      const cardName = 'Trello Card';

      // Verificar se o listId foi definido corretamente
      if (!listId) {
        throw new Error('List ID não encontrado. Certifique-se de que a lista foi recuperada corretamente.');
      }

      TrelloApi.createCard(apiKey, apiToken, listId, cardName).then((response) => {
        const responseBody = response.body;
        expect(response.status).to.eq(200);
        expect(responseBody.name).to.eq(cardName);

        // Logar o ID do novo card
        cy.log(`Card ID: ${responseBody.id}, Card Name: ${responseBody.name}`);
      });
    });
  });
});
