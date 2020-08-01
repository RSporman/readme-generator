const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");

const questions = [
{
    type: 'input',
    name: 'repoName',
    message: 'What is name of this application? (This will aslo the main header of the README)',
 
},
//asks user for git hub user name 
{
    type: 'input',
    name: 'gitHubName',
    message: 'What is your username on Github?',
 
},
// asks for a description of the project 
{
    type: 'input',
    message: 'Write a description of this application',
    name: 'description',
 
},
// How do you install your app? 
{
    type: 'input',
    message: 'How does a user install your application? Provide instuctions here',
    name: 'installApp',
 
},
// How does a user use your application? 
{
    type: 'input',
    message: 'How does a user use your application? Provide instuctions here',
    name: 'appInstructions',
 
},
// How would a user of this application report an issue, or make a contribution to it? 
{
    type: 'input',
    message: 'Would you like you users to be able to report issues or contribute to this project? add instructions here.',
    name: 'appIssuesAndCont',
}

]

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        // console.log("Creating README");
        writeToFile("README.md", generateMarkdown({...response}))

});
}  
// function call to initialize program
init();