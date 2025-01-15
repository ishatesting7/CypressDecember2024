const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const fs = require('fs');

const path = require('path');
const XLSX = require('xlsx');

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

      on('task', {
        readExcelFile(filePath) {
          const absolutePath = path.resolve(__dirname, 'cypress/fixtures', filePath);
          const workbook = XLSX.readFile(absolutePath);
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          return data;
        }
      });
      // implement node event listeners here
    },

    env:{
      baseUrl:'https://www.saucedemo.com'
    }
  },
});
