// call

Function.prototype.callMe = function() {
    const fn = this;
    const context = arguments[0];
    const args = [];
    for(let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    const output = fn.apply(context, args);
    return output;
}



// bind --------------------------------------

// es5

Function.prototype.bind2 = function() {
    const fn = this;
    const ctx = arguments[0];
    const args = Array.from(arguments).slice(1);

    if (typeof fn !== 'function') {
      throw new TypeError('Not a valid function');
    }

    return function() {
      const allArguments = args.concat(Array.from(arguments));
      fn.apply(ctx, allArguments);
    };
  };

// es6


Function.prototype.mybind = function (context, ...args1) {
    let fn = this;
    return function (...arg2) {
        fn.apply(context, [...args1, ...arg2])
    }
  }

  let person = {
    'name': 'urvi',
    'age': 25
  };
  
  function callMe(city) {
    console.log(this.name ,this.age ,arguments[0] ,rguments[1]);
  }



  let callBind= callMe.bind(person, 'delhi');
  let mycallBind= callMe.mybind(person, 'delhi');
  callBind('j&k');
  mycallBind('j&k');


// apply --------------------------------------------

Function.prototype.customApply = function(context, args){
    var fn = this;
    var output = fn.call(context, args);
    return output;
  }
  function abc(a,b){
    console.log(person,a,b)
  }
  
  person = {
    name: 'urvi'
  }
  console.log(abc.customApply(person, ['a','b','c']));



// todo random print function----------------------------------------------

Function.prototype.printFnDetails = function() {
  var args = [];
  
  for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
  
    return {name:this.name, arguments: args, len: arguments.length};
}

const o = abc.printFnDetails("999999");

console.log(o)