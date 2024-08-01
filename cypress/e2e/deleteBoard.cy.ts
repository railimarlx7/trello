import { deleteAllBoards } from '../support/utils';
import TestState from '../support/testState';

describe('Trello API - Delete All Boards', () => {
  const apiKey = Cypress.env('apiKey');
  const apiToken = Cypress.env('apiToken');

  it('should delete all boards', () => {
    // Iniciar o processo de exclusão de todos os boards
    deleteAllBoards(apiKey, apiToken);
  });
});
