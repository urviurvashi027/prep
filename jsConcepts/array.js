
// ---------------------------------------------- Foreach -----------------------------------------------
// Foreach takes a callback function and run that callback function on each element of array one by one.
function callbackFilter(el,i,array,thisArg) { }

var sample = [1, 2, 3];
// es5
sample.forEach(function (elem, index){
   console.log(elem + ' comes at ' + index);
})
// es6
sample.forEach((elem, index) => `${elem} comes at ${index}`)
/*
output
1 comes at 0
2 comes at 1
3 comes at 2
*/

// Note : You cant use break 

// ---------------------------------------------- map -----------------------------------------------
// Map like filter & foreach takes a callback and run it against every element on the array but whats makes it unique is 
// it generate a new array based on your existing array.
function callbackFilter(el,i,array,thisArg) { };

var arr = [12,34,45,45,65,7,678,787];
arr.map((el,i) => el*6)

const output = [1,2,3].map(function(val, index) {
    // returns some value;
    return "XYZ";
    });

    //  ["XYZ", "XYZ", "XYZ"]

// ---------------------------------------------- filter -----------------------------------------------

function callbackFilter(el,i,array,thisArg) { }

// Filter let you provide a callback for every element and returns a filtered array.
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Also take notice filter does not update the existing array it will return a new filtered array every time.

var sample = [1, 2, 3] // yeah same array
// es5
var result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result)
// es6
var result = sample.filter(elem => elem !== 2)
/* output */
[1, 3]

// ---------------------------------------------- reduce -----------------------------------------------

// As the name already suggest reduce method of the array object is used to reduce the array to one single value.
// The reducer function takes four arguments:

// Accumulator -- The accumulator accumulates callback's return values. 
// Current Value -- The current element being processed in the array.
// Current Index -- The index of the current element being processed in the array
// Source Array -- The array reduce() was called upon.
// initial value -- A value to use as the first argument to the first call of the callback.

[3,5,4,6].reduce((acc, el)=>{return acc+el},10)

// ---------------------------------------------- reduceRight -----------------------------------------------

// The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
  );
  
  console.log(array1);
  // expected output: Array [4, 5, 2, 3, 0, 1]

// ---------------------------------------------- every -----------------------------------------------
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
function callbackFilter(el,i,array,thisArg) { }
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// ---------------------------------------------- from -----------------------------------------------

// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([12,34,45,56]));

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

// ---------------------------------------------- some -----------------------------------------------
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
// It doesn't modify the array.

const array = [1, 7, 3, 9, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true


// -------------------------------------------------------------------------------------------
// Important :: 
// 1. When using the .forEach() you pass an individual function with it’s own scope. In a for loop you’re polluting whatever scope you place the loop in.
// 2. Admittedly, .forEach() and .map() are still slower than a vanilla for loop.
// 3. The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.
// That's something you can't do with forEach() because, as you might guess, it returns undefined.
