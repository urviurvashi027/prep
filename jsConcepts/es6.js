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