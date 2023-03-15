const Engineer = require('../lib/engineer');



// test('should return a property called Github', () => {
//     //Arrange
//     const testGithub = 'roddazad';
//     //Act
//     const engineer = new Engineer (testGithub);

//     //Assert
//     expect(engineer.github).toBe(testGithub);
// });

// test('should return a function called getGithub', () => {
//     //Arrange
//     const testGithub = 'roddazad';
//     //Act
//     function getGithub(){
//         return this.github
//     }
//     getGithub();

//     //Assert
//     expect(getGithub()).toBe(this.github);
// });

test('returns a Engineer object', () => {
    
    //Arrange
    const id = Engineer.id;
    const name = Engineer.name;
    const email = Engineer.email;
    const github = Engineer.github;

    //Act
    const testEngineer = new Engineer (id, name, email, github);

    //Assert
    expect(typeof testEngineer).toBe('object')

})