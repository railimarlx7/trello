import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://api.trello.com/1',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
