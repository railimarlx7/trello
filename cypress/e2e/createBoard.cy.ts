// cypress/e2e/createBoard.cy.ts

import { Board } from '../../types/trello';
import { TrelloApi } from '../support/trelloApi';
import TestState from '../support/testState';

describe('Trello API - Create Board', () => {
  it('should create a new board named "Trello Board"', () => {
    const apiKey = Cypress.env('CYPRESS_API_KEY');
    const apiToken = Cypress.env('CYPRESS_API_TOKEN');
    const organizationID = Cypress.env('CYPRESS_ORG_ID');
    const boardName = 'Trello Board';

    TrelloApi.createBoard(apiKey, apiToken, boardName, organizationID).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(boardName);

      // Armazenar o ID do board no TestState
      TestState.getInstance().setBoardId(response.body.id);
    });
  });
});
