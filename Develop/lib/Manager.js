const Employee = require('./Employee')

class Manager extends Employee {

  constructor(name, id, email, officeNumber){


      super(name, id, email);

      this.officeNumber = officeNumber;

  }

  getOfficeNumber(){
    if (!this.officeNumber){
        console.log('No number, please try again');
        } else {
          return this.officeNumber;
        }      
  }  

  getRole(){
    if (!new Employee){  
      console.log("error")    
    } else {
      return "Manager"
    }
  }
  
};

module.exports = Manager

// var test2 = new Manager('name', 'id', 'email','office')
// console.log(test2)