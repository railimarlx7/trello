class TestState {
    private static instance: TestState;
    private boardId: string | null = null;
    private listId: string | null = null;
    private cardId: string | null = null;
  
    private constructor() {}
  
    static getInstance(): TestState {
      if (!TestState.instance) {
        TestState.instance = new TestState();
      }
      return TestState.instance;
    }
  
    setBoardId(id: string): void {
      this.boardId = id;
    }
  
    getBoardId(): string | null {
      return this.boardId;
    }
  
    setListId(id: string): void {
      this.listId = id;
    }
  
    getListId(): string | null {
      return this.listId;
    }
  
    setCardId(id: string): void {
      this.cardId = id;
    }
  
    getCardId(): string | null {
      return this.cardId;
    }
  }
  
  export default TestState;
  