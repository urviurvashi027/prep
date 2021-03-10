function outer() {
    var b = 10;
    function inner() {
         
          var a = 20; 
          console.log(a+b);
     }
    return inner;
 }

 var x = outer();
 x();

 // ---------------------------------
 function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3
alert(counter()); // 4

// Closure is useful in hiding implementation detail in JavaScript. 
// In other words, it can be useful to create private variables or functions.

var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };   
  })();

  alert(counter.value()); 
  counter.increment();
  counter.increment();
  alert(counter.value());
  counter.decrement();
  alert(counter.value()); 

  // ------------------------------------------

  function outer() {
    var b = 10;
    var c = 100;
       function inner() {
            
             var a = 20; 
             console.log("a= " + a + " b= " + b);
             a++;
             b++;
        }
       return inner;
    }
    var X = outer();  // outer() invoked the first time
    var Y = outer();  // outer() invoked the second time
    //end of outer() function executions
    X(); // X() invoked the first time
    X(); // X() invoked the second time
    X(); // X() invoked the third time
    Y(); // Y() invoked the first time


    function f() {
        let value = 123;
      
        return function() {
          alert(value);
        }
      }
      
      let g = f(); // while g function exists, the value stays in memory
      
      g = null; // ...and now the memory is cleaned up


      // -------------------------------------
      
      let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
//--------------------------
function callTheNumber() {
  function getAllNumbers(number) {
    return function() {
      return number;
    };
  }
  var arrToStore = [];
  for (var x = 0; x < 9; x++) {
    arrToStore[x] = getAllNumbers(x);
  }
  return arrToStore;
}

const callInnerFunctions = callTheNumber();
console.log(callInnerFunctions[0]()); // 0
console.log(callInnerFunctions[1]()); // 1
//======================================

function countTheNumber() {
  var arrToStore = [];
  for (var x = 0; x < 9; x++) {
    arrToStore[x] = function () {
      return x;
    };
  }
  return arrToStore;
}

const callInnerFunctions = countTheNumber();
callInnerFunctions[0]() // 9
callInnerFunctions[1]() // 9