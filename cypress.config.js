const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  pageLoadTimeout:60000,
  chromeWebSecurity:false,

  //viewportHeight:667,
  //viewportWidth:375,
  e2e: {
    setupNodeEvents(on, config) {
  
      // implement node event listeners here
    },

    env:{
      baseUrl:'https://www.saucedemo.com'
    }
  },
});
