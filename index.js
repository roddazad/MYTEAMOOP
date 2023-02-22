const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const promptEngineer = function () {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engNmae",
        message: "Please enter the engineer's name:",
      },
      {
        type: "input",
        name: "engId",
        message: "Please enter the engineer's ID:",
      },
      {
        type: "input",
        name: "engEmail",
        message: "Please enter the engineer's email:",
      },
      {
        type: "input",
        name: "engGithub",
        message: "Please enter the engineer's Github username:",
      },
    ])
    .then(promptIntern);
};

const promptIntern = function () {
  return inquirer.prompt([
    {
      type: "input",
      name: "intNmae",
      message: "Please enter the Intern's name:",
    },
    {
      type: "input",
      name: "intId",
      message: "Please enter the Intern's ID:",
    },
    {
      type: "input",
      name: "intEmail",
      message: "Please enter the Intern's email:",
    },
    {
      type: "input",
      name: "intSchool",
      message: "Please enter the Intern's School name:",
    },
  ]);
};

const promptUser = function () {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "Please enter the team manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the team manager's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the team manager's email address:",
      },
      {
        type: "input",
        name: "office",
        message: "Please enter the team manager's office number:",
      },
    ])
    .then(promptMenu);
};

const promptMenu = function () {
  inquirer
    .prompt({
      type: "list",
      name: "menu",
      message:
        "Would you like to add and 'engineer' or 'intern' or finish building your team:",
        choices: ["Add an Engineer", "Add an Intern", "Finish Building my Team"],
    })
    .then((data) => {
        if(data.menu === "Add an Engineer"){
              promptEngineer()
        }
        else if(data.menu === 'Add an Intern'){
              promptIntern()
        }
        else {

        }
      console.log(data);
    });
};

promptUser();

