const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const managerHTML = (manager) => {
  return `<div class="card" style="width: 18rem;">
            
<div class="card-body">
<h1>Manager</h1>
  <h5 class="card-title">${manager.name}</h5>
 
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${manager.id}</li>
  <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a> </li>
  <li class="list-group-item">${manager.officeNum}</li>
</ul>
<div class="card-body">

</div>
</div>`;
};

const engineerHTML = (engineer) => {
  return `<div class="card" style="width: 18rem;">
            
<div class="card-body">
<h1>Engineer</h1>
  <h5 class="card-title">${engineer.name}</h5>
 
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${engineer.id}</li>
  <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a> </li>
  <li class="list-group-item">${engineer.gitHub}</li>
</ul>
<div class="card-body">

</div>
</div>`;
};

const internHTML = (intern) => {
  return `<div class="card" style="width: 18rem;">
            
<div class="card-body">
<h1>Intern</h1>
  <h5 class="card-title">${intern.name}</h5>
 
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${intern.id}</li>
  <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a> </li>
  <li class="list-group-item">${intern.school}</li>
</ul>
<div class="card-body">

</div>
</div>`;
};

const setRoles = (data) => {
  // console.log(data)
  const roleArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    // console.log(employee)
    const role = employee.getRole();
    // console.log(role)
  
    if (role === "Manager") {
      const managerCard = managerHTML(employee);
      roleArray.push(managerCard);
      // console.log(roleArray)
    }
   
  
    if (role === "Engineer") {
      const engineerCard = engineerHTML(employee);
      roleArray.push(engineerCard);
      // console.log(roleArray)
    }
  
    if (role === "Intern") {
      const internCard = internHTML(employee);
      roleArray.push(internCard);
      // console.log(roleArray)
    }
    // console.log(roleArray)
    
    const joinedArray = roleArray.join('')
    // console.log(joinedArray)
    return joinedArray
   
  }
};

const createTeamHtml = (data) => {
  // console.log(data)
  
return `<!DOCTYPE html>
  <html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="dist/style.css" />
  <title>Team</title>
</head>
<body>
<h1>My Team</h1>
    <div class="myCards">
${setRoles(data)}
</div>
</body>
</html>
`;
};
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

async function appInit() {
  await createManager();

  let CreateATeamMember = true;
  while (CreateATeamMember) {
    const addAnotherEmployee = await createTeamMember();
    if (addAnotherEmployee === true) {
      createTeamMember(team)
    } else {
      break;
    }
  }
}

const writeToFile = (data) => {
  fs.writeFile("index.html", data, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

appInit()
.then(function() {
  return createTeamHtml(team)
}).then((data) => {
  return writeToFile(data)
}).catch(err => {
  console.log(err)
})
