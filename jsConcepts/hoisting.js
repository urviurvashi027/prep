// *************************************** variables *****************************************

var a = 1;
var a;
console.log(a);

// ------------------------------

abc(); // 6

function abc() {
  console.log("1");
}

abc(); // 6

function abc() {
  console.log("2");
}

abc(); // 6

var abc = function() {
  console.log("3");
}

abc(); // 3

function abc() {
  console.log("4");
}

abc(); // 3

var abc = function() {
  console.log("5");
}

abc(); // 5

function abc() {
  console.log("6");
}

abc(); // 5

// abc - function abc => prints6

//Question 1
console.log('bar:', bar)
bar = 15
var foo = 1
console.log(foo, bar)
var bar

//Question 2
var foo = 5
console.log('foo:', foo)
var foo;
var bar = 10;
var bar;
console.log('bar:', bar)
var baz = 10
var baz = 12
console.log('baz:', baz)

//Question 3
function foo() {
  function bar() {
    return 5
  }
  return bar()
  function bar() {
    return 10
  }
}
console.log(foo());

//Question 4
function foo() {
  var bar = "I'm a bar variable"

  function bar() {
    return "I'm a bar function"
  }
  return bar()
}
console.log(foo())

//Question 5
greeting()
var greeting = function() {
  console.log('Good morning')
}
greeting()

function greeting() {
  console.log('Good evening')
}
greeting()

//Question 6
var foo = 5
console.log('foo:', foo)
var foo = 10
console.log('foo:', foo)

//Question 7
console.log(foo());

function foo() {
  var bar = function() {
    return 3
  }
  return bar()
  var bar = function() {
    return 8
  }
}

// Question 8
var x = 'foo';
(function() {
  console.log('x: ' + x)
  var x = 'bar'
  console.log('x: ' + x)
})()

//Question 9
function foo() {
  console.log('First')
}
foo()

function foo() {
  console.log('Second')
}

//Question 10
var foo = 5

function baz() {
  foo = 10
  return

  function foo() {}
}
baz()
console.log(foo)
// **************************************** TDZ ***************************************

let a =a;
var b = b;
// ----------------------------------------

{
    console.log(age);
    let age = 34;
}

// ----------------------------------------
console.log(typeof x);
console.log(typeof v);
console.log(typeof g);
var v = 90;let g = 80;

// ---------------------------------------
function bh(a=b, b){};
bh(undefined, 7);

// --------------------------------------

let c = k();
const h = 900;
function k () {return h}


// ************************************ function hositing *************************************

xyz();

function xyz(){
    return "Hey Urvi";
}

// not hoisted

expression();

var expression = function() {
    return "Hey Urvi";
}


// ************************************ class hositing ****************************************

var rabbit = new Animal();

rabbit.color = 'white';
rabbit.leg = 4;

class Animal {
    constructor() {
        this.color = color;
        this.leg = leg;
    }
}

var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // Output: TypeError: Polygon is not a constructor

var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
 


// ************************************ prcedence *********************************************

var x = 90;

function x() {
    console.log("hii john");
}

console.log(typeof x);

var abv;

function abv() {
    console.log("hii john");
}

console.log(typeof abv);


