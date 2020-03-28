const Employee = require('./lib/Employee')

class Intern extends Employee {

    constructor(school){
        this.school = school;

        super(name, id, email);
    }

    getSchool(){
      if (!this.school){
        console.log('Please provide the name of your school');
        } else {
          return this.school;
        }
    };
};
