// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// require employee class to pull to construct the Manager class 
const Employee = require('../lib/employee');

// Manager class extends employee class
class Manager extends Employee{
    // constructor class has the email, name, id parameters and github specific to manager 
    constructor(name, id, email, officeNumber){
        // super pulls the aspects from the employee class to the manager class
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    // get office Number method returns office number
    getOfficeNumber(){
        return this.officeNumber;
    }
    // get role method returns role 
    getRole(){
        return 'Manager';
    }
};
// export intern module
module.exports = Manager;