import { fetchOrCreateResource } from "../support/utils";
import { TrelloApi } from "../support/trelloApi";
import TestState from "../support/testState";

describe('Trello API - Create List', () => {
  const apiKey = Cypress.env('CYPRESS_API_KEY');
  const apiToken = Cypress.env('CYPRESS_API_TOKEN');

  before(() => {
    fetchOrCreateResource('Board', apiKey, apiToken, Cypress.env('CYPRESS_ORG_ID'));
  });

  it('should create a new list named "Trello List"', () => {
    const boardId = TestState.getInstance().getBoardId();
    const listName = 'Trello List';

    if (!boardId) {
      throw new Error('Board ID não encontrado.');
    }

    TrelloApi.createList(apiKey, apiToken, listName, boardId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(listName);
    });
  });
});
