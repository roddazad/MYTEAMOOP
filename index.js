const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'manager',  
        message: "Please enter the team manager's name:"
    },
    {
        type: 'input',
        name: 'id',  
        message: "Please enter the team manager's employee ID:"
    },
    {
        type: 'input',
        name: 'email',  
        message: "Please enter the team manager's email address:"
    },
    {
        type: 'input',
        name: 'office',  
        message: "Please enter the team manager's office number:"
    },
    {
        type: 'list',
        name: 'menu',  
        message: "Would you like to add and 'engineer' or 'intern' or finish building your team:",
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Building my Team'],
        validate: function (value){if (value === 'Add an Engineer'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'engNmae',  
                    message: "Please enter the engineer's name:"
                },
                {
                    type: 'input',
                    name: 'engId',  
                    message: "Please enter the engineer's ID:"
                },
                {
                    type: 'input',
                    name: 'engEmail',  
                    message: "Please enter the engineer's email:"
                },
                {
                    type: 'input',
                    name: 'engGithub',  
                    message: "Please enter the engineer's Github username:"
                },])
            
        
        } else  {
            if (value === "Add an Intern"){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'IntName',  
                        message: "Please enter the Intern's name:"
                    },
                    {
                        type: 'input',
                        name: 'IntId',  
                        message: "Please enter the Intern's ID:"
                    },
                    {
                        type: 'input',
                        name: 'IntEmail',  
                        message: "Please enter the Intern's email:"
                    },
                    {
                        type: 'input',
                        name: 'intSchool',  
                        message: "Please enter the Intern's school name:"
                    },])
            
                } else  {if (value === "Finish Building my Team") {
                    return
                } }} 
    }
])
.then();