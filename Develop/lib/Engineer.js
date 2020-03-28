const Employee = require('./lib/Employee')

class Engineer extends Employee {
    cosntructor(gitHub) {
        super(name, Id, Email,);
        this.gitHub = gitHub ;   
    };
    
    getGitHub(){
      if (!this.gitHub){
        console.log('No input, try again');
      } else {
        return this.gitHub
      }  
    }

};
  