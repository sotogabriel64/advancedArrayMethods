/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doubledArray = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArray.push(arr[i] * 2);
    }
    return doubledArray;
}

let numebers = [1, 2, 3, 4, 5];
let doubleNumbers = doubleValues(numbers);
console.log(doubledNumbers);
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let evenArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
          }
        }
        return evenArray;
}

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = onlyEvenValues(numbers);
console.log(evenNumbers); // [2, 4]

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let firstAndLastArray = [];
  for (let i = 0; i < arr.length; i++) {
    let firstChar = arr[i][0];
    let lastChar = arr[i][arr[i].length - 1];
    firstAndLastArray.push(firstChar + lastChar);
  }
  return firstAndLastArray;
}

let words = ["hello", "world", "example"];
let firstAndLastChars = showFirstAndLast(words);
console.log(firstAndLastChars); // ["ho", "wd", "ee"]

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    for (let i = 0; i < arr.length; i++) {
        arr[i][key] = value;
      }
      return arr;
}

let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 40 }
  ];
  addKeyAndValue(users, "isAdmin", true);
  console.log(users);
  

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    let vowels = "aeiou";
  let vowelCount = {};
  for (let char of str) {
    let lowercaseChar = char.toLowerCase();
    if (vowels.indexOf(lowercaseChar) !== -1) {
      if (vowelCount[lowercaseChar]) {
        vowelCount[lowercaseChar]++;
      } else {
        vowelCount[lowercaseChar] = 1;
      }
    }
  }
  return vowelCount;
}

let phrase = "This is a phrase with some vowels";
let result = vowelCount(phrase);
console.log(result); // {a: 3, e: 3, i: 3, o: 3, u: 1}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function(value) {
        return value * 2;
      });
}

let numbers = [1, 2, 3, 4, 5];
let doubled = doubleValuesWithMap(numbers);
console.log(doubled); // [2, 4, 6, 8, 10]

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(value, index) {
        return value * index;
      });
}

let numbers = [1, 2, 3, 4, 5];
let multiplied = valTimesIndex(numbers);
console.log(multiplied); // [0, 2, 6, 12, 20]

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(obj) {
        return obj[key];
      });
}

let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 40 },
    { name: 'Charlie', age: 50 }
  ];
  let names = extractKey(people, 'name');
  console.log(names); // ['Alice', 'Bob', 'Charlie']
  
/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(obj) {
        return obj['first'] + ' ' + obj['last'];
      });
}

let people = [
    { first: 'Alice', last: 'Smith' },
    { first: 'Bob', last: 'Jones' },
    { first: 'Charlie', last: 'Brown' }
  ];
  let fullNames = extractFullName(people);
  console.log(fullNames); // ['Alice Smith', 'Bob Jones', 'Charlie Brown']
  
/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(obj) {
        return obj.hasOwnProperty(key);
      });
}

let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', occupation: 'Engineer' },
    { name: 'Charlie', hobby: 'Gardening' }
  ];
  let filteredPeople = filterByValue(people, 'occupation');
  console.log(filteredPeople); // [{ name: 'Bob', occupation: 'Engineer' }]
  

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
          return arr[i];
        }
      }
      return undefined;
}

let numbers = [1, 2, 3, 4, 5];
let result1 = find(numbers, 3);
let result2 = find(numbers, 6);
console.log(result1); // 3
console.log(result2); // undefined

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === val) {
          return arr[i][key];
        }
      }
      return undefined;
}

let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];
  
  let result1 = findInObj(people, 'name', 'Bob');
  let result2 = findInObj(people, 'age', 40);
  console.log(result1); // 'Bob'
  console.log(result2); // undefined
  

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (!vowels.includes(char)) {
      newStr += char;
    }
  }
  return newStr;
}

let result1 = removeVowels('Hello, World!');
let result2 = removeVowels('The quick brown fox jumps over the lazy dog.');
console.log(result1); // 'hll, wrld!'
console.log(result2); // 'th qck brwn fx jmps vr th lzy dg.'

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0).map(num => num * 2);
}

let result1 = doubleOddNumbers([1, 2, 3, 4, 5]);
let result2 = doubleOddNumbers([0, 1, 2, 3, 4, 5]);
console.log(result1); // [2, 6, 10]
console.log(result2); // [2, 6, 10]

