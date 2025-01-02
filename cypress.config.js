const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  pageLoadTimeout:60000,
  e2e: {
    setupNodeEvents(on, config) {
      

      // implement node event listeners here
    },

    env:{
      baseUrl:'https://www.saucedemo.com'
    }
  },
});
