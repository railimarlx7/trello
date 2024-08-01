import { deleteAllBoards } from '../support/utils';

describe('Trello API - Delete All Boards', () => {
  const apiKey = Cypress.env('CYPRESS_API_KEY');
  const apiToken = Cypress.env('CYPRESS_API_TOKEN');

  it('should delete all boards', () => {
    deleteAllBoards(apiKey, apiToken);
  });
});
