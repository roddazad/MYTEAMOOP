const Employee = require("./employee");

class Intern extends Employee {
    constructor(school){
        super(Employee.id, Employee.name, Employee.email)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return Intern;
    }
}

module.exports = Intern;