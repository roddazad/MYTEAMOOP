const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(Employee.id, Employee.name, Employee.email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return Manager;
  }
}

module.exports = Manager;
