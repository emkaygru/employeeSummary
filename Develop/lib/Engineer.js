// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// require employee class to pull to construct the engineer class 
const Employee = require('../lib/employee');
// engineer class extends employee class
class Engineer extends Employee{
    // constructor class has the email, name, id parameters and github specific to engineer 
    constructor(name, id, email, github){

        super(name, id, email)
        this.github = github;
    }
    // get github method
    getGithub(){
        return this.github;
    }
    // get role method returns role 
    getRole(){
        return 'Engineer';
    }
};
// export engineer module
module.exports = Engineer;