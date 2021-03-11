function sumAll(arr) {
    var allSum = 0;
    var sortedArr = arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
        });
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
      allSum += i;
    }
    return allSum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4,1]));
console.log(sumAll([5,10]));
console.log(sumAll([10,5]));
console.log(sumAll([101,95]));

//---------------------------------------------------------

function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length; i++){
      if (arr2.indexOf(arr1[i]) === -1) {
          newArr.push(arr1[i]);
      }
    }
    for (let j = 0; j < arr2.length; j++){
      if (arr1.indexOf(arr2[j]) === -1) {
          newArr.push(arr2[j]);
      }
    }
    return newArr;
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));


//---------------------------------------------------------

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//---------------------------------------------------------

function destroyer(arr, ...valuesToRemove) {

    //console.log(arr);
    //console.log(valuesToRemove);
    return arr.filter(elem => !valuesToRemove.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

//---------------------------------------------------------

function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
  var srcKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {
      return srcKeys
        .map(function(key) {
          return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
        .reduce(function(a, b) {
          return a && b;
        });
});

// Only change code above this line

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//---------------------------------------------------------

function spinalCase(str) {

    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    var newStr = str
          .trim()
          .toLowerCase()
          .split(/(?:_| )+/);
  
  
      
      return newStr.join("-");
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

//---------------------------------------------------------

function myReplace(str, before, after) {
  let myRegex = /^[A-Z]/;

  if (myRegex.test(before)) {
    after = after[0].toUpperCase() + after.slice(1);
  }else{
    after = after[0].toLowerCase() + after.slice(1);
  }


  return str.replace(before,after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

//---------------------------------------------------------

function pairElement(str) {
  let dnaArray = []
  
  for (let i=0; i < str.length; i++){
    var strandType = str[i];
    switch(strandType){
      case "A":
        dnaArray.push(["A","T"]);
        break;
      case "T":
        dnaArray.push(["T","A"]);
        break;
      case "C":
        dnaArray.push(["C","G"]);
        break;
      case "G":
        dnaArray.push(["G","C"]);
        break;
    }

  }

  return dnaArray;
}

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

//----------------------------------------------------------

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

//----------------------------------------------------------

function uniteUnique(arr) {
  let uniqueArray = [];
  let fullString = [...arguments];

  for (let i=0; i<fullString.length; i++) {
    for (let j=0; j < fullString[i].length; j++) {
      if(!uniqueArray.includes(fullString[i][j])){
      uniqueArray.push(fullString[i][j]);
    }}}
  return uniqueArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//----------------------------------------------------------

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  let myRegex = /([&<>\"'])/g; 
  return str.replace(myRegex, match => htmlEntities[match]); 
}

console.log(convertHTML("Dolce & Gabbana"));

//----------------------------------------------------------

//fibonacci sequence
function sumFibs(num) {
  var fib1 = 1;
  var fib2 = 1;
  var fibs = 1;
  var allFibs = [1];
  var fibSum = 1;
  //console.log(allFibs);
  for (let i = 0; i <= num;i=fib2) {
    allFibs.push(fibs);
    if(fibs % 2 !== 0) {
      fibSum+=fibs;
    }
    fibs = fib1 + fib2;
    //console.log(allFibs);
    fib1 = fib2;
    fib2 = fibs;
    }

  if(num == 0){
    fibSum = 0;
  }

  return fibSum;
}

console.log(sumFibs(8));
console.log(sumFibs(1000));
console.log(sumFibs(1));
console.log(sumFibs(0));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));

//---------------------------------------------------------

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);

//---------------------------------------------------------------

function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));

//---------------------------------------------------------------

