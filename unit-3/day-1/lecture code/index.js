//Javascript 6

let exampleObj = {};

exampleObj.name = 'Matt';
// console.log(exampleObj)

//Contructor review
//Write a constructor function called Person that takes in name, age, and birthday properties.

function Person(name, age, birthday){
  this.name = name;
  this.age = age;
  this.birthday = birthday;
}

//Attach a prototype method to the Person constructor called introduceSelf.  It should return a string with the person's name and age.

Person.prototype.introduceSelf = function(){
  return `${this.name}: ${this.age}`;
}

//Create two new people and have them introduce themselves.

const aaronObj = new Person('Aaron', 26, 'June 18th');
const benObj = new Person('Ben', 23, 'June 12th');

// console.log(aaronObj)
// console.log(benObj)
// aaronObj.introduceSelf()
// benObj.introduceSelf()

//Classes
//Create a class called Aircraft that takes in name and range, a string and number respectively.  Also initialize a property called milesFlown and set it to 0.  Attach a prototype method called fly that add the range of the aircraft to the milesFlown.  Then return the updated object.

// function Aircraft(name, range){
//   this.name = name;
//   this.range = range;
//   this.milesFlown = 0;
// }

// Aircraft.prototype.fly = function(){
//   this.milesFlown += this.range;
//   return this;
// }

class Aircraft {
  constructor(name, range){
    this.name = name;
    this.range = range;
    this.milesFlown = 0;
  }

  //prototype methods
  fly(){
    this.milesFlown += this.range;
    return this;
  }
}

const boieng747 = new Aircraft('747', 5000);
// console.log(boieng747)
// boieng747.fly()

//Use your class to create a new Aircraft and invoke fly.

//Create a new class called Plane that extends aircraft.  It should also take in passengerCount and initialize a passengersFlown property at 0 and a destination property as an empty string.  Modify the exising fly method to take in a destination parameter, It should add the passengerCount to the passengersFlown and add the destination to the destination property.  It should  return a string stating 'name has flown passengersFlown passengers a total of milesFlown miles.  It has gone to destination'.  Make sure all previous functionality of fly is maintained.

class Plane extends Aircraft {
  constructor(name, range, passengerCount){
    super(name, range);
    this.passengerCount = passengerCount;
    this.passengersFlown = 0;
    this.destination = '';
  }

  fly(destination){
    super.fly();
    this.passengersFlown += this.passengerCount;
    this.destination = destination;
    return `${this.name} has flown ${this.passengersFlown} passengers a total of ${this.milesFlown} miles. It has gone to ${this.destination}.`;
  }
}

const xWing = new Plane('X-Wing', 10000, 2)
// console.log(xWing)

xWing.fly('Dagobah')

//Use your class to create a new Airplane and make it fly somewhere!

//Create a new class called PrivateJet that extends Plane.  It should also take in an owner property. Modify the existing fly method to instead return 'name has flown owner and passengersFlown friends milesFlown miles.  It has gone to destination.  Make sure all previous functionality of fly is maintained.

class PrivateJet extends Plane {
  constructor(name, range, passengerCount, pilot){
    super(name, range, passengerCount);
    this.pilot = pilot;
  }

  fly(destination){
    super.fly(destination);
    return `${this.name} has flown ${this.pilot} and ${this.passengersFlown} friends ${this.milesFlown} miles. It has gone to ${this.destination}`;
  }
}

//Use your class to create a new PrivateJet and have it fly wherever you want.

const milleniumFalcon = new PrivateJet('Millenium Falcon', 50000, 25, 'Han Solo');
// console.log(milleniumFalcon)
// milleniumFalcon.fly('Alderaan')

// Closures

//Global Scope
const numOne = 7;

function sayNum(){
  //Lexical Scope
  const numTwo = 11;

  return numOne;
}

// sayNum()
// console.log(numTwo)

//Write a function called secretNumber.  This function should initialize a number variable at 0 and return a function that increments the number variable.

function secretNumber(){
  let num = 0;

  function addOne(){
    // return num += 1;
    return ++num;
  }

  return addOne;
}

// function secretNumber(num){
//   return function(){
//     return ++num;
//   }
// }
//Use your function to initialize a new instance of num and invoke the returned function to increment it.

//Snapshot
const incrementOne = secretNumber()
// console.log(incrementOne)
// incrementOne()
// incrementOne()
// incrementOne()

const incrementTwo = secretNumber()
// console.log(incrementTwo)
// incrementTwo()

//Write a function called someonesNumber that takes in a name paramter.  Initialize a number variable at 0 and return a function that will return the string `name's number is`

function someonesNumber(name){
  let num = 0;

  return function(numTwo){
    num = numTwo;
    return `${name}'s number is ${num}`;
  }
}

//Invoke someonesNumber to create a new instance of num and then invoke that returned function to change the number.  Repeat this process to show that there are two separate instances of num.

const mattNum = someonesNumber('Matt');
// mattNum(7)
// mattNum(11)


//Create a function called register that takes in a password, a string.  This function will be used to register new users.  Inside of the register function, initialize a variable to track how many times someone has tried to login.  Also initialize a variable to track a secret, this can be anything.  Create a function that takes in a string to attempt to login.  This function with first increment the number of times someone has tried to log in.  Then it will check if the number of attempts is greater than 3, if it is it should return a string indicating that the maximum number of attempts has been exceeded.  Then, it will check if the password is correct.  If it is, the function should return the secret.  Otherwise, it should increment the number of attempts and indicate to the user that their password is incorrect.

function register(password){
  let loginAttempts = 0;
  let secret = 'This is a secret';

  return function(attemptStr){
    if(attemptStr === password){
      return secret;
    } else {
      loginAttempts++;
      if(loginAttempts > 3){
        return 'Maximum attempts exceeded';
      }
    }
  }
}

const mattPassword = register('123456');
// mattPassword('12345')
// mattPassword('12345')
// mattPassword('12345')
// mattPassword('12345')


//Module Pattern

//Use the module pattern to create a calculator.  It should have functionality to add, subtract, multiply, divide, and clear.

function calculator(){
  let result = 0;

  return {
    add: function(num){
      return result += num;
    },
    subtract: function(num){
      return result -= num;
    },
    multiply: function(num){
      return result *= num;
    },
    divide: (num) => result /= num,
    clear: function(){
      result = 0;
      return result;
    }
  }
}

const ti84 = calculator();
// console.log(ti84)
// ti84.add(5)
// ti84.subtract(2)
// ti84.multiply(20)
// ti84.divide(2)
// ti84.clear()

const ti84Plus = calculator();
// ti84Plus.multiply(10)
// ti84Plus.subtract(5)
// ti84Plus.add(10)