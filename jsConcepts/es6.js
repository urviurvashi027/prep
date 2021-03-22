// ES6
let x = 1,
    y = 2,
    obj = { x, y };
console.log(obj); // Object { x: 1, y: 2 }
// ES5
var x = 1,
    y = 2,
    obj = {
      x: x,
      y: y
    };
console.log(obj); // Object { x: 1, y: 2 }

// -----------------------------

// ES6
let getKey = () => '123',
    obj = {
      foo: 'bar',
      ['key_' + getKey()]: 123
    };
console.log(obj); // Object { foo: 'bar', key_123: 123 }
// ES5
var getKey = function () {
      return '123';
    },
    obj = {
      foo: 'bar'
    };
obj['key_' + getKey()] = 123;
console.log(obj); // Object { foo: 'bar', key_123: 123 }

// ----------------------------
// ES6
let obj = {
    name: 'object name',
    toString () { // 'function' keyword is omitted here
      return this.name;
    }
  };
  console.log(obj.toString()); // object name
  // ES5
  var obj = {
    name: 'object name',
    toString: function () {
      return this.name;
    }
  };
  console.log(obj.toString()); // object name

// ------------------------- string literal ----------------------
  // Simple string substitution
  var name = "Brendan";
  console.log(`Yo, ${name}!`);

  // => "Yo, Brendan!"

  // multiline
  var greeting = "Yo \
World";
console.log(`string text line 1
string text line 2`);

//---
var a = "temp string"; // static strings
console.log(`My country is: ${ a }`);
console.log(`My country is: ${ abc() }`);

a = `
    <div>
        <br/>
        <p>${  greeting}</p>
    </div>
`;

// relatively faster compared to document APIs as DOM is slow

// If you are playing around with a few limited elements/nodes - document.createElement
// If the count is large - go for template literals

const listItem = document.createElement("li");
const node = document.createTextNode("Name: Jimmy");

const content = `<li>Name: ${data.name}</li>`