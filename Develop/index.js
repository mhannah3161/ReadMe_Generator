// Required rackages for application
const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown");

// This is an array of question for prompts
const questions = [

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },

    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:"
    },

    {
        type: "input",
        name: "github",
        message: "What is you GitHub username?"
    },

    {
        type: "list",
        name: "license",
        message: "What license does our project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GLP3.0", "BSD2", "BSD3", "None"]
    },

    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },

    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },

    {
        type: "input",
        name: "usage",
        message: "What is the proper usage of this repo?"
    },

    {
        type: "input",
        name: "contributors",
        message: "Who are any contributors of this repo?"
    }
];

// this is the function to wirte file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// This will start up the app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Generating.... Please wait....");
        writeToFile("./utils/sampleREADME.md", generateMarkdown({ ...inquirerAnswers }));
    })
}

// Call of the function that starts app
init();