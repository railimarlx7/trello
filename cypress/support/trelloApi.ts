export class TrelloApi {
  // Método genérico para realizar requisições à API do Trello
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

  // Método para criar um novo quadro (board)
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

  // Método para ler todos os quadros de uma organização
  static readBoards(apiKey: string, apiToken: string): Cypress.Chainable<any> {
    const organizationID = Cypress.env('CYPRESS_ORG_ID');
    return this.createResource(
      'GET',
      `/organizations/${organizationID}/boards`,
      apiKey,
      apiToken
    );
  }

  // Método para criar uma nova lista em um quadro
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

  // Método para ler todas as listas de um quadro
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

  // Método para criar um novo cartão em uma lista
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

  // Método para ler todos os cartões de uma lista
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

  // Método para deletar um cartão
  static deleteCard(
    apiKey: string,
    apiToken: string,
    cardId: string
  ): Cypress.Chainable<any> {
    return this.createResource('DELETE', `/cards/${cardId}`, apiKey, apiToken);
  }

  // Método para deletar um quadro
  static deleteBoard(
    apiKey: string,
    apiToken: string,
    boardId: string
  ): Cypress.Chainable<any> {
    return this.createResource('DELETE', `/boards/${boardId}`, apiKey, apiToken);
  }
}
