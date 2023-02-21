const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber){
        super(Employee.id, Employee.name, Employee.email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return Manager;
    }
}

module.exports = Manager;