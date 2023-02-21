const Intern = require('../lib/intern');

test('should return a property called School', () => {
    //Arrange
    const testSchoolName = 'UWCoding';
    //Act
    const intern = new Intern (testSchoolName);

    //Assert
    expect(intern.school).toBe(testSchoolName);
});

test('should return a function called getSchool', () => {
    //Arrange
    const testSchoolName = 'UWCoding';
    //Act
    function getSchool(){
        return this.school
    };
    getSchool();

    //Assert
    expect(getSchool()).toBe(this.school);
});

test('returns a manager object', () => {
    
    //Arrange
    const id = Intern.id;
    const name = Intern.name;
    const email = Intern.email;
    const school = Intern.school;

    //Act
    const testIntern = new Intern (id, name, email, school);

    //Assert
    expect(typeof testIntern).toBe('object')

})