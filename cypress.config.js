const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const fs = require('fs');


const cucumber = require("@badeball/cypress-cucumber-preprocessor").default;

//Changes for Cucumber 
const createBundler =  require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
//import plugin from "cypress-mochawesome-reporter/plugin";

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
    
    
    baseUrl:"https://docs.cypress.io/",

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // const bundler = createBundler({
      //   plugins:[createEsbuildPlugin(config)],
      // });
      // on("file:preprocessor",bundler);

      // addCucumberPreprocessorPlugin(on, config);
      // return config;
    

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
