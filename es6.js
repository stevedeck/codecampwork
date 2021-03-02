function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
    // Only change code above this line
}
  
console.log(randomRange(14, 24));

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

function convertToInteger(str) {
    return parseInt(str,2); // convert string using base 2
}
console.log(convertToInteger("10011"));
convertToInteger("10011");

function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}
console.log(checkEqual(2,2));
console.log(checkEqual(2,3));
console.log(checkEqual(2,-2));
checkEqual(1, 2);

function checkSign(num) {
    return (num < 0) ? "negative" : ( num > 0) ? "positive" : "zero";
}

console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));

function countdown(n){
    if (n<1){
      return [];
    } else {
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
}
  
console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
      
    if (startNum === endNum){
    return [startNum];
  } else {
    var countRange = rangeOfNumbers(startNum, endNum-1);
    countRange.push(endNum);
    return countRange;
  }
}

console.log(rangeOfNumbers(20, 28));

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

const magic = () => new Date();

console.log(magic());

const myConcat = (arr1, arr2) => {
    "use strict"
    return arr1.concat(arr2);
}
console.log(myConcat([1, 2], [3, 4, 5]));

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

//--------------------------------------------

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
"use strict";
// change code below this line
const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
// change code above this line
return failureItems;
}
const failuresList = makeList(result.failure);

const result = {
success: ["max-length", "no-amd", "prefer-arrow-functions"],
failure: ["no-var", "var-on-top", "linebreak"],
skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
"use strict";
// change code below this line
const failureItems = [];
for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
}
// change code above this line
return failureItems;
}

const failuresList = makeList(result.failure);

//-----------------------------------------------------
// Only change code below this line
class Vegetable {
  constructor(name) {
      this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//-----------------------------------------------------

// Only change code below this line
class Thermostat {
  constructor(fahrenheit){
      this.fahrenheit = fahrenheit;
  }
  
  get temperature(){
      return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celsius){
      this.fahrenheit = celsius * 9 / 5 + 32;
  }

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//-----------------------------------------------------

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});

//-----------------------------------------------------

