class Employee {

  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
  };

  getName(){
      inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter Employee Name:',
          name: 'empName'
        }
      ]).then(function({empName}){}
    };
  };

  getId()

  getEmail()

  getRole()



    
