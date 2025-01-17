const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const fs = require('fs');

const path = require('path');
const XLSX = require('xlsx');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  watchForFileChanges:false,
  pageLoadTimeout:60000,
  chromeWebSecurity:false,
  //video:true,
  //testIsolation:false,
  //viewportHeight:667,
  //viewportWidth:375,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);


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
