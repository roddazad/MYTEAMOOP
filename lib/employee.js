class Employee {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getRole() {
        return this.employee;
      }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email
    }
  
}
module.exports = Employee;