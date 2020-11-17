const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// path directories
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// render directory for HTML renderer 
const render = require("./lib/htmlRenderer");

const teammates = [];

const validName = (input) => {
    if(/\d/.test(input)|| input === ''){
        return 'Please enter a valid name.';
    }else{
        return true;
    }
};

const validID = (input) => {
    if(isNaN(input) || input === ''){
        return 'Please enter a valid number';
    }else{
        return true;
    }
};

const validEmail = (input) => {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input) || input === ''){
        return true;
    }else{
        return 'Please enter a valid e-mail address.'
    }
};


function createTeam(){

    inquirer.prompt([
        {
            type: 'list',
            message: 'What is your current position/role?',
            name: 'userChoice',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'No other Employees'

            ]

        }
    ]).then(userInput =>{
        switch(userInput.userChoice){
            case 'Manager': addManager(); break;
            case 'Engineer': addEngineer(); break;
            case 'Intern': addIntern(); break; 
            case 'No other Employees' : render(teammates); break
        }
    })


    function addManager(){

        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'managerName',
                validate: validName,

            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'managerEmail', 
                validate: validEmail, 

            },
            {
                type: 'input',
                message: 'What is your ID number?',
                name: 'managerID',
                validate: validID
            },
            {
                type: 'input',
                message: 'What is your Office Number?',
                name: 'managerOfficeNumber',
                validate: validID
            },
        ]).then(userInput => {
            console.log(userInput);

            const manager = new Manager(userInput.managerName, userInput.managerEmail, userInput.managerID, userInput.managerOfficeNumber);
            teammates.push(manager)

            createTeam();

        })
    }



    function addEngineer(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'engineerName',
                validate: validName
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'engineerEmail',
                validate: validEmail
            },
            {
                type: 'input',
                message: 'What is your ID number?',
                name: 'engineerID',
                validate: validID
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'engineerGithub',
                validate: validName
            },
        ]).then(userInput => {
            console.log(userInput);

            const engineer = new Engineer(userInput.engineerName, userInput.engineerEmail, userInput.engineerID, userInput.engineerGithub);
            teammates.push(engineer);

            createTeam();
        })
    }

    function addIntern(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'internName',
                validate: validName

            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'internEmail',
                validate: validEmail
            },
            {
                type: 'input',
                message: 'What is your ID Number?',
                name: 'internID',
                validate: validID
            },
            {
                type: 'input',
                message: 'What is the school you are attending?',
                name: 'internSchool',
                validate: validName
            },
        ]).then(userInput => {
            console.log(userInput);

            const intern = new Intern(userInput.internName, userInput.internEmail, userInput.internID, userInput.internSchool);
            teammates.push(intern);

            createTeam();
        })
    }


}

// export teammates 
module.exports = teammates;
// create team function call 
createTeam();

