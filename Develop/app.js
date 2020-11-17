const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teammates = [];

const validName = (input) => {
    if(input = ''){
        console.log(`Please enter a valid name.`);
    }else{
        return true;
    }
}

const validPhone = (input) => {
    if(input = ''){
        console.log(`Please enter a valid phone number`);
    }else{
        return true;
    }
}

const validID = (input) => {
    if(input = ''){
        console.log(`Please enter a valid ID number.`);
    }else{
        return true;
    }
}

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
                name: 'managerName'           
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'managerEmail',  
            },
            {
                type: 'input',
                message: 'What is your ID number?',
                name: 'managerID'
            },
            {
                type: 'input',
                message: 'What is your Office Number?',
                name: 'managerOfficeNumber'
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
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: 'What is your ID number?',
                name: 'engineerID'
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'engineerGithub'
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
                name: 'internName'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'internEmail'
            },
            {
                type: 'input',
                message: 'What is your ID Number?',
                name: 'internID'
            },
            {
                type: 'input',
                message: 'What is the school you are attending?',
                name: 'internSchool'
            },
        ]).then(userInput => {
            console.log(userInput);

            const intern = new Intern(userInput.internName, userInput.internEmail, userInput.internID, userInput.internSchool);
            teammates.push(intern);

            createTeam();
        })
    }


}

module.exports = teammates;

createTeam();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
