const Employee = require("../lib/employee");

test("should create an object for the employee class", () => {
    //Arange
    //Act
    const employee = new Employee();

    //Assert
    expect(typeof employee).toBe('object')
})

test('should return a property called id', () => {
    //Arange
    const testingID = 45
    //Act
    const testEmp1 = new Employee (testingID);
    //Assert
    expect(testEmp1.id).toBe(testingID)
})

test('should return a property called name', () => {
    //Arange
    const testingName = 'Rodd'
    //Act
    const testEmp1 = new Employee (45,testingName);
    //Assert
    expect(testEmp1.name).toBe(testingName)
})

test('should return a property called email', () => {
    //Arange
    const testingEmail = 'Rodd@example.com'
    //Act
    const testEmp1 = new Employee (45, 'Rodd', testingEmail);
    //Assert
    expect(testEmp1.email).toBe(testingEmail)
})

test('should return three functions to get employee ID, Name and Email', () => {
    //Arangeroperty called email
    function getName(){
        return this.name
    };
    function getId(){
        return this.id;
    };
    function getEmail(){
        return this.email
    };
    //Act
    const testEmp1 = new Employee (45, 'Rodd', 'rodd@example.com');
    //Assert
    expect(getName()).toBe(this.name);
    expect(getId()).toBe(this.id);
    expect(getEmail()).toBe(this.email);
})