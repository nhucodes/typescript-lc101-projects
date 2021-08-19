//declare a number
let x: number = 10;
let y: number;

y = 1111;

// reassign number
// x = 'Hello';



// declare a function
function printValue(x: string | number): void {
}

printValue('hhello');
printValue(NaN);


function fullName(user: User) {
  return user.firstName + user.lastName;
}

fullName({ firstName: "Alvin", lastName: "Seville", age: 8 })


const simon: Chipmunk = {
  firstName: 'Simon',
  lastName: 'Sevile'
}

fullName(simon);


// interface User
interface User {
  firstName: string;
  lastName: string;
  age?: number;
}


// implements interface
class Chipmunk implements User {
  firstName: string = '';
  lastName: string;
  age?: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const theodore: Chipmunk = new Chipmunk("Theodore", "Seville");
console.log(theodore.age);
