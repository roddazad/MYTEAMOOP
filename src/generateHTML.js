const employeeChoices = [];

const createManager = (manager) => {

`<div class="card" style="width: 18rem;">
            
<div class="card-body">
  <h5 class="card-title">${manager.name}</h5>
 
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${manager.id}</li>
  <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a> </li>
  <li class="list-group-item">${manager.officeNumber}</li>
</ul>
<div class="card-body">

</div>
</div>`
};

const createEngineer = (engineer) => {

`<div class="card" style="width: 18rem;">
            
<div class="card-body">
  <h5 class="card-title">${engineer.name}</h5>
 
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${engineer.id}</li>
  <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a> </li>
  <li class="list-group-item">${engineer.gitHub}</li>
</ul>
<div class="card-body">

</div>
</div>`
};

const createIntern = (intern) => {

`<div class="card" style="width: 18rem;">
            
<div class="card-body">
  <h5 class="card-title">${intern.name}</h5>
 
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${intern.id}</li>
  <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a> </li>
  <li class="list-group-item">${intern.school}</li>
</ul>
<div class="card-body">

</div>
</div>`
};

const setRoles = () => {
  roleArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    
    if (role === "Manager") {
      const managerCard = createManager(employee);

      roleArray.push(managerCard);
    }

   
    if (role === "Engineer") {
      const engineerCard = createManager(employee);

      roleArray.push(engineerCard);
    }

    
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      roleArray.push(internCard);
    }
  }
};

const createTeamHtml = () => {
  `<html lang="en">
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
  <title>Document</title>
</head>
<body>
${employeeCards}
</body>
</html>
`;
};

