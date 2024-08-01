export class TrelloApi {
  static createResource<T>(
    method: 'POST' | 'GET' | 'DELETE',
    endpoint: string,
    apiKey: string,
    apiToken: string,
    body?: Partial<T>
  ): Cypress.Chainable<any> {
    return cy.api({
      method,
      url: endpoint,
      qs: { key: apiKey, token: apiToken },
      body,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  static createBoard(
    apiKey: string,
    apiToken: string,
    boardName: string,
    organizationID: string
  ): Cypress.Chainable<any> {
    return this.createResource('POST', `/boards/`, apiKey, apiToken, {
      name: boardName,
      idOrganization: organizationID
    });
  }

  static readBoards(apiKey: string, apiToken: string): Cypress.Chainable<any> {
    return this.createResource(
      'GET',
      `/organizations/${Cypress.env('organizationID')}/boards`,
      apiKey,
      apiToken
    );
  }

  static createList(
    apiKey: string,
    apiToken: string,
    listName: string,
    boardId: string
  ): Cypress.Chainable<any> {
    return this.createResource('POST', `/lists`, apiKey, apiToken, {
      name: listName,
      idBoard: boardId
    });
  }

  static readLists(
    apiKey: string,
    apiToken: string,
    boardId: string
  ): Cypress.Chainable<any> {
    return this.createResource(
      'GET',
      `/boards/${boardId}/lists`,
      apiKey,
      apiToken
    );
  }

  static createCard(
    apiKey: string,
    apiToken: string,
    listId: string,
    cardName: string
  ): Cypress.Chainable<any> {
    return this.createResource('POST', `/cards`, apiKey, apiToken, {
      idList: listId,
      name: cardName
    });
  }

  static readCards(
    apiKey: string,
    apiToken: string,
    listId: string
  ): Cypress.Chainable<any> {
    return this.createResource(
      'GET',
      `/lists/${listId}/cards`,
      apiKey,
      apiToken
    );
  }

  static deleteCard(
    apiKey: string,
    apiToken: string,
    cardId: string
  ): Cypress.Chainable<any> {
    return this.createResource('DELETE', `/cards/${cardId}`, apiKey, apiToken);
  }

  static deleteBoard(
    apiKey: string,
    apiToken: string,
    boardId: string
  ): Cypress.Chainable<any> {
    return this.createResource(
      'DELETE',
      `/boards/${boardId}`,
      apiKey,
      apiToken
    );
  }
}
