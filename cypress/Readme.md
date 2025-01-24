
- Javascript (TypeScript)
- VS Code
- NPM (Node Package Manager)
- Manual Testing is must


Why Cypress
-----------

Selenium + Cypress + Playwright
-------------------------------
Frontend and Backend


- Easy Setup (3 to 5 Minute)
- Built In feature - Assertions, Mocking, Additional Library is not req
- Live Reload - 10X Faster
- Interactive Test Runner - 
- Time Travel
- Flaky TestCases 
- Cypress - Directly inside Browser
- Community Support
- SPA(Single Page Application) - React, Angular, Vue js - 
- Documentation 
- Plugins
- Integration CI/CD


Selenium

Script ---> Driver ---> WebDrive ---> ChromeDriver ---> Chrome

Cypress

Script --> Chrome


Cypress Cloud 
-------------

WebSite Link - https://www.cypress.io/

Total Hour - 25 Hours - 35 Hours

Daily - 1 Hour 

Time - 9PM IST to 10PM IST

Days - Monday to Friday

3-5 Year with realtime framework - Cypress

At the end of Course - Course Completion Certificate


-- Download Node JS - 

https://nodejs.org/en/download/prebuilt-installer

-- Download VS Code

https://code.visualstudio.com/download

-- Course Content Link 

https://www.ishatrainingsolutions.org/cypress-automation-course-javascript-fundamentals-test-runner-api-testing-framework-design-implementation/




Why we have installed Node?

Day 1 
-----

Step 1 

Create a folder and open the folder via VS Code

Step 2

Run a command - npm init -- This will create package.json



Step 3

Go to Terminal and write a below command for installing cypress

Install Cypress - npm install cypress --save-dev 

13.16.1

Step 4

Run - npx cypress open

Step 5

Create a Test File -

Run in headless mode - npx cypress run --spec "cypress/e2e/CypressUIAutomation/FirstCypressTest.cy.js"
Run in headed mode - npx cypress open and select the spec file 



-> CSS Locator 
--------------
<input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" placeholder="Username" autofocus="">

HTML 
----
-> Tagname
-> Attribute
-> Value

CSS -
1. If you are aware about the classname - Then the CSS Selector would -> 
    .classname
2. If you are aware about the ID - Then the CSS Selector would be ->
    #ID
3. If you are aware about attribute and value -
    [name="username"]
4. If you are aware about tagname, attribute and value - 
    input[name="username"]
5. Indexing 
6. Parent Child Traversing

2 Plugins - 
- SelectorHub
https://selectorshub.com/selectorshub/

- ChroPath


Xpath - 
1. Relative Xpath
    - text()
    - contains()
    - starts-with()

    //input[@name="login-button"]

2. Absolute Xpath

    /html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/input[1]


Git Process 
-----------

1. Download Git - https://git-scm.com/downloads/win

2. Some Basic Git Commands - https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html

3. Create your account on - https://github.com/login


---------

- git init


If you are doing via VS Code

- Create a public repo and push all the changes
- git add <filename> or git add .
- git commit -m "Add your message"
- git push



Once you clone the Project -
Trigger command in Terminal - npm i or npm install


-------
3 Programs 
1. Check weather string is palindrome
2. Count the number of character in a given string
3. Reverse a String


Assignment - 10th Jan - 2025

- Read all the table value from the table.
- Count the number of rows and columns 
- Click on the pagination at the bottom of the page


Step1 - 

WebSite URL - https://ecommerce-playground.lambdatest.io/index.php?route=account/login


1. Create all the Pages file - Give proper naming convention

loginPage.js
accountPage.js
registerPage.js

PageElement and PageAction

2. Create Folder and SubFolder

HomePage
    - Login
    - Register
Search
    - SearchAndCheckout
    - Search
Checkout
    - Checkout
    - CheckoutwithPromoCode
    - CheckoutWithDiffPaymentMethod

3. Create Reusable Component

genericUtils.js

=============================================================
Topic to be coverend (Left out topic)

- cy.session
- cy.origin



API Testing - Manual Testing
-----------
- Postman
- SOAP UI
- Swagger
- JMeter

---------------------

Cucumber BDD
------------
Features
Scenario
Scenario outline
Example
Background
Tags
<parameter>

2 Major File

.feature File - Plain Gherkin Language
Given When And Then


File - .feature
---------------
Given user launch the url "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
When user enter the credentials <username> and <password>
And user click on Login button
Then user navigate to home page

stepDefinition
--------------

@Given
user_launch_the_url()
{
    cy.visit('url')
}

@When
when_user_enter_the_credentials()
{
    cy.get('locator').type();

}

stepDefinition File

Steps to configure Cypress Cucumber Project - 

1. npm install @badeball/cypress-cucumber-preprocessor

API Testing (REST API)
---------------------
Postman
Swagger
ReadyAPI

Performance Testing
JMeter


Endpoint - https://www.easemytrip.com/search.aspx/CheckSignIn
Method Type - POST
Status Code - 200
Request Payload
    {d: " not valid user"}
Response Payload 
    {"d":" not valid user"}

JSON - Java Single Object Notation
Frontend ------> APIs -------> Backend
(Client)                        (Server)
Backend ------> APIs --------> Frontend
Status Code - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Endpoint - https://www.easemytrip.com/api/flight/GetDate
Method Type - GET
Response - "2025-01-24"

1. Validate the URL provided
2. Validate the Response Status Code
3. Validate the Response Message
4. Validate the Method Type which has been passed for the API
5. Validate the API by passing incorrect method type (405 Method Not Supported)


POSTMAN - WebVersion as well Application

- Collection
    - Folder 1
        - subfolder
    - Folder 2
        - subfolder
        
- Environment
    
- Work Flow

- APIs
