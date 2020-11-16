// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// require employee class to pull to construct the intern class 
const Employee = require('./lib/employee');
// intern class extends employee class

class Intern extends Employee{
    // constructor class has the email, name, id parameters and github specific to intern 
    constructor(email, name, id, school){
        // super pulls the aspects from the employee class to the intern class
        super(email, name, id)
        this.school = school;
    }
    // get school method
    getSchool(){
        return this.school;
    }
    // get role method returns role 
    getRole(){
        return 'Intern';
    }
};
// export intern module
module.exports = Intern;