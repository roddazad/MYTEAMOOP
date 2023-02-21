const Manager = require('../lib/manager');

test('should return a Manager property called office Number', () => {
    //Arrange
    const testOfficeNumber = 50
    //Act
    const manager = new Manager (testOfficeNumber);

    //Assert
    expect(manager.officeNumber).toBe(testOfficeNumber);

})

test('returns a manager object', () => {
    
    //Arrange
    const id = Manager.id;
    const name = Manager.name;
    const email = Manager.email;
    const offNum = Manager.officeNumber;

    //Act
    const testManager = new Manager(id, name, email, offNum);

    //Assert
    expect(typeof testManager).toBe('object')

})