let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

console.log(result)

//---------------------------------

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

//---------------------------------

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//---------------------------------

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

//---------------------------------

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result);

//----------------------------------

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);

//----------------------------------

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

//----------------------------------

let sample = "Whitespace is important in separating words";
let countnonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countnonWhiteSpace);
console.log(result);

//----------------------------------

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);

console.log(pwRegex.test("banan1"));
console.log(pwRegex.test("bana12"));
console.log(pwRegex.test("abc123"));
console.log(pwRegex.test("12345"));

//----------------------------------

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);