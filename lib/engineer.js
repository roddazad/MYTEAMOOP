const Employee = require("./employee");

class Engineer extends Employee{
    constructor(github){
        super(Employee.id, Employee.name, Employee.email);
        this.github = github;
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return Engineer;
    }
}

module.exports = Engineer;