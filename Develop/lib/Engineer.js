const Employee = require('./Employee')

class Engineer extends Employee {

  constructor(name, id, email, github) {

      super(name, id, email);

      this.github = github;   
  };
  
  getGitHub(){
    if (!this.github){
      console.log('No input, try again');
    } else {
      return this.github
    }  
  }

  getRole(){
    
      return "Engineer"
    }
}


module.exports = Engineer
  
// var engineer = new Engineer('name', 'id','email','github username');

// console.log(engineer)