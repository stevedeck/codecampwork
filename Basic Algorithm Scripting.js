function convertToF(celsius) {
    let fahrenheit = celsius*9/5 + 32;
    return fahrenheit;
}

convertToF(30);

//----------------------------------------------

function reverseString(str) {
    for (var reversedStr="", i = str.length - 1; i >= 0; i--){
      reversedStr += str[i];
    }
  
    return reversedStr;
}

reverseString("hello");

console.log(reverseString("hello"));

//----------------------------------------------

function factorialize(num) {
    let numFactorial = 1;
    for (let i=1; i <=num; i++) {
      numFactorial *= i;    
    }
  
  
    return numFactorial;
}

factorialize(5);

console.log(factorialize(6));

//----------------------------------------------

function findLongestWordLength(str) {
    var words = str.split(' ');
    var maxLength = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//----------------------------------------------

function largestOfFour(arr) {
    let largestNums=[];
    for (let i=0 ; i < arr.length; i ++) {
      var largestInner = arr[i][0];
      for (let j=1; j < arr[i].length; j++) {
        if (arr[i][j] > largestInner){
          largestInner = arr[i][j];
        }
      }
      largestNums[i] = largestInner;
    }
    return largestNums;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//----------------------------------------------

function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "ian");

//----------------------------------------------

function repeatStringNumTimes(str, num) {
    let repeatStr = "";
    if (num > 0) {
      for (let i = 0; i < num; i++){
        repeatStr+=str;
      }
    }
  
    return repeatStr;
}
  
console.log(repeatStringNumTimes("abc", 3));

//----------------------------------------------

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
  
      return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//----------------------------------------------

function findElement(arr, func) {
    let num = 0;
    for (var i = 0; i < arr.length; i++){
      num = arr[i];
      if(func(num)){
        return num;
      }
    }
  
    return undefined;
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

//----------------------------------------------

function booWho(bool) {
    return typeof bool === "boolean";
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho("true"));
console.log(booWho("false"));

//----------------------------------------------

function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}

titleCase("I'm a little tea pot");

//---------------------------------

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//-----------------------------------

function bouncer(arr) {

    let arrTruthy = [];
  
    for(var i = 0; i < arr.length; i++){
      if(arr[i]){
        arrTruthy.push(arr[i]);
      }
    }
    return arrTruthy;
}
  
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

//-----------------------------------

function getIndexToIns(arr, num) {

    var indexNum = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] < num) indexNum++;
    }
  
  
    return indexNum;
}
  
console.log(getIndexToIns([40, 60], 50));

//-----------------------------------

function mutation(arr) {

    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
  
mutation(["hello", "hey"]);

//-----------------------------------

function chunkArrayInGroups(arr, size) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i += size) {
      arr2.push(arr.slice(i, i + size));
    }
    return arr2;
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);