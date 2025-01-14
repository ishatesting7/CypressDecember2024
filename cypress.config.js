const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const fs = require('fs');

module.exports = defineConfig({
  watchForFileChanges:false,
  pageLoadTimeout:60000,
  chromeWebSecurity:false,

  //viewportHeight:667,
  //viewportWidth:375,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      on('task',{
        copyFile({source,destination
        }){
          fs.copyFileSync(source,destination);
          return null;
        },
      });
      // implement node event listeners here
    },

    env:{
      baseUrl:'https://www.saucedemo.com'
    }
  },
});
