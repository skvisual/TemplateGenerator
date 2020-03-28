const Employee = require('./lib/Employee')
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {

    constructor(officeNumber){

        this.officeNumber = officeNumber;

        super(name, id, email);
    }

    getOfficeNumber(){
      if (!this.officeNumber){
          console.log('No number, please try again');
          } else {
            return this.officeNumber;
          }      
    }  
};
