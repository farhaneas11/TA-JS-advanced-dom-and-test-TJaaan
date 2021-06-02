var num = 10;

var increaseNumber = () => num++;
var increasePassedNumber = (number) => number++;

var num1 = increaseNumber();
var num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);


var animalMethods = {
    eat: function () {
      console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function (newLocation) {
      this.location = newLocation;
      return this.location;
    },
    summary: function () {
      console.log(
        `I live in ${this.location} and I have ${this.numberOfLegs}`
      );
    },
  };

  function createAnimal(location, numberOfLegs) {
    let obj = Object.create(animalMethods);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
  }
  
  function createDog(location, numberOfLegs, name, color) {
    let obj = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(obj, dogsMethods);
    obj.name = name;
    obj.color = color;
    return obj;
  }
  
  var dogsMethods = {
    bark() {
      alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName(name) {
      this.name = name;
      return this.name;
    },
    changeColor(newColor) {
      this.color = newColor;
      return this.color;
    },
    summary() {
      return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    },
  };
  
  Object.setPrototypeOf(dogsMethods, animalMethods);
  
  function createCat(
    location,
    numberOfLegs,
    name,
    colorOfEyes
  ) {
    let obj = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(obj, catsMethods);
    obj.name = name;
    obj.color = colorOfEyes;
    return obj;
  }
  
  let catsMethods = {
    meow() {
      alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(name) {
      this.name = name;
      return this.name;
    },
    changeColorOfEyes(newColor) {
      this.colorOfEyes = newColor;
      return this.colorOfEyes;
    },
    summary() {
      return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    },
  };
  Object.setPrototypeOf(catsMethods, animalMethods);

  
  
  

  const anakinSkywalker = 'Anakin Skywalker';
  const lukeSkywalker = 'Luke Skywalker';
  
  const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
  };

  

  

function getFullName(user) {
    let firstName = user.firstName;
    let lastName = user.lastName;
  
    return `${firstName} ${lastName}`;
  }
