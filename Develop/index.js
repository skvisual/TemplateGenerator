const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const html = [];

const render = require("./lib/htmlRenderer");

function createHTML(html){
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, render(html), function (err) {
    if (err) throw err;
    console.log('File creation successful');
  })

};

function addAnother(){
  inquirer
  .prompt([
    {
      type: 'confirm',
      message: 'Do you want to add another Employee?',
      name: 'addConfirm',
    }
  ]).then(function({addConfirm}) {
    if (addConfirm){
      start();
    } else {
      createHTML(html)
    }
  }
)};


function start(){
  const questions = [
  {
      type: 'input',
      message: 'Please enter the name',
      name: 'name'
  },

  {
      type: 'input',
      message: 'Please enter the employee ID number',
      name: 'id',
      validate : answer => {
        const valid = answer.match(`^[0-9]*$`);
          if (valid){
            return true
          } else {
            return 'ID MUST BE A NUMBER!'
          }          
      }
          
  },
  {
      type: 'input',
      message: 'Please enter the email',
      name: 'email',
      validate: answer => {
        const pass = answer.match(
          /\S+@\S+\.\S+/
        );
        if (pass) {
          return true;
        }
        return "Please enter a valid email address";
      }
  },

  {
      type: 'list',
      message: 'Please select the role',
      choices: ['Manager', 'Engineer', 'Intern'],
      name: 'role'
  },

  {
      type: 'input',
      message: 'Please enter the office number',
      name: 'officeNumber',
      when: function(answers){
      return answers.role === 'Manager';
      }
  },

  {
      type: 'input',
      message: 'Please enter the GitHub username',
      name: 'github',
      when: function(answers){
      return answers.role === 'Engineer';
      }
  },

  {
      type: 'input',
      message: 'Please enter the school name',
      name: 'school',
      when: function(answers){
      return answers.role === 'Intern';
      }
      }
  ]
  inquirer
  .prompt(questions)
  .then(function(answers){
    switch(answers.role) {
      case 'Manager':
          const manager = new Manager(answers.name, parseInt(answers.id), answers.email, answers.officeNumber);
         html.push(manager);
         break
      case 'Engineer':
          const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
          html.push(engineer);
          break
      case 'Intern':
          const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
          html.push(intern);
          break
  }
  addAnother();
  })
};

start();