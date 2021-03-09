let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}
};

console.log(dog.sayLegs());

//-------------------------------------------------------

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

//-------------------------------------------------------

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();

//-------------------------------------------------------

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;

}

let terrier = new Dog("Charlie", "Brown");

console.log(terrier.name);
console.log(terrier.color);

//-------------------------------------------------------

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(4);

console.log(myHouse instanceof House);

//-------------------------------------------------------

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
  this.testOutput = "test";
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs", "testOutput" ]

//-------------------------------------------------------

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");

//-------------------------------------------------------

function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog){
      return true;
    } else {
      return false;
    }
}

//-------------------------------------------------------

function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    // Only change code below this line
    numLegs:4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};

//-------------------------------------------------------

function Dog(name) {
    this.name = name;
}
  
let beagle = new Dog("Snoopy");
  
Dog.prototype.isPrototypeOf(beagle);  // yields true
  
// Fix the code below so that it evaluates to true
console.log(Object.prototype.isPrototypeOf(Dog.prototype));

//-------------------------------------------------------

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

//-------------------------------------------------------

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() { console.log("Woof!"); };



// Only change code above this line

let beagle = new Dog();

beagle.eat();
beagle.bark();

//-------------------------------------------------------

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//-------------------------------------------------------

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding through it all!")
    }
  }
  
  glideMixin(bird);
  glideMixin(boat);
  
  bird.glide();
  boat.glide();

//-------------------------------------------------------

function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
      return weight;
    };
  
}

let ducky = new Bird();

console.log(ducky.getWeight());

//-------------------------------------------------------

(function () {
    console.log("A cozy nest is ready");
})();

//-------------------------------------------------------

let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    }
})();

