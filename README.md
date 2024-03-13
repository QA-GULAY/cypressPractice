# MBA-CYPRESS-REAL-WORK-PROJECT

* This project was created by Master Branch Academy for the purpose of "Cypress Practice"

       -> https://automationexercise.com/

* Covers only the user interface of the website
  
* Created with Javascript

* POM was preferred as the design pattern.

### How to install? ###

* Install node.js
* npm install
* npm install cypress@13.0.0 --save-dev

### How to open Cypress control panel? ###

* npx cypress open

### How to run all tests? ###

* npx cypress run

### How to perform a specific test? ###

* npx cypress run --spec ./cypress/e2e/Test/HomePage.cy.js

### File structure ###

|- MBA-CYPRESS-REAL-WORK-PROJECT
    |- cypress

        |- e2e ##  keeps test files and pages
           |- Page ## keeps the methods specified on the web page
           |- Test ## keeps tests
        |- fixture ## holds optional json files
     
    |- screenshots ## keeps screenshots of failed tests
    |- support ##  holds special commands
    |- videos ## keeps videos for failed tests
    |- .gitignore ## ignore files to process
    |- cypress.config.js ## cypress configuration file
