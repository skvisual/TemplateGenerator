class Employee {

  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
  };

  getName(){
    //If no name is entered, it will alert error, else return the name.
    if (!this.name){
      console.log('No name, please try again');
    } else {
      return this.name
    }
  };

  getId(){
    if (!this.id){
      console.log('No Id, please try again');
    } else {
      return this.id
    }
  };

  getEmail(){
    if (!this.email){
      console.log('No Email, please try again');
    } else {
      return this.email
    }
  };

  getRole(){
    if (!new Employee){
      console.log('Error. Please try again');
    } else {
      return "Employee"
    }
  };
};

module.exports = Employee
