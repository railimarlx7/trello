// cypress/e2e/createBoard.cy.ts

import { Board } from '../../types/trello';
import { TrelloApi } from '../support/trelloApi';
import TestState from '../support/testState';

describe('Trello API - Create Board', () => {
  it('should create a new board named "Trello Board"', () => {
    const apiKey = Cypress.env('apiKey');
    const apiToken = Cypress.env('apiToken');
    const organizationID = Cypress.env('organizationID');
    const boardName = 'Trello Board';

    TrelloApi.createBoard(apiKey, apiToken, boardName, organizationID).then((response) => {
      const responseBody: Board = response.body;
      expect(response.status).to.eq(200);
      expect(responseBody.name).to.eq(boardName);

      // Armazenar o ID do board no TestState
      const boardId = responseBody.id;
      TestState.getInstance().setBoardId(boardId);
      cy.log(`Board ID armazenado: ${boardId}`);
    });
  });
});
