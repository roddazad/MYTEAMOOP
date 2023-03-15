const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const team = [];




async function createManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the team manager's name:",
      },
      {
        type: "number",
        name: "id",
        message: "Please enter the team manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email",
      
      },
      
      {
        type: "number",
        name: "officeNumber",
        message: "What is the manager's office number",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);

      
    }); 
}
async function createTeamMember() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Choose an employee role from one of the following:",
        choices: ["engineer", "intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter the employee's name:",
      },
      {
        type: "number",
        name: "id",
        message: "Please enter employees's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email address:",
    
      },

      {
        type: "input",
        name: "gitHub",
        message: "Please enter the engineer's github username:",
        when: (list) => list.role === "engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the name of the intern's unversity/school:",
        when: (list) => list.role === "intern",
      },

      {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        
      },
    ])

    .then((answers) => {
      const addEmployee = answers.addEmployee;
      if (answers.role === "engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.gitHub
        );
        team.push(engineer);
      } else if (answers.role === "intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        team.push(intern);
      }
      return addEmployee;
    }); 
}

async function runAllOfIt() {
  await createManager();

  let CreateATeamMember = true;
  while (CreateATeamMember) {
    const addAnotherEmployee = await createTeamMember();
    if (addAnotherEmployee === true) {
      
    } else {
      break;
    }
  }
}

runAllOfIt();


