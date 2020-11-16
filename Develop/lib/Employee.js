// TODO: Write code to define and export the Employee class

class Employee{
    // constructor function to create the employee class
    constructor(name,id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // get name method returns name
    getName(){
        return this.name;
    }
    // get email method returns email
    getEmail(){
        return this.email;
    }
    // get id method returns ID
    getId(){
        return this.id;
    }
    // get role method returns role of employee
    getRole(){
        return 'Employee'
    }

};

module.exports = Employee;
