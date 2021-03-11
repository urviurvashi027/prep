Function.prototype.customCall = function () {
    const fn = this;
    const contenxt = arguments[0];
    const args = [];
    for (let i =1; i < arguments.length;i++){
        args.push(arguments[i])
    }
    const output = fn.apply(contenxt, args);
    return output;
}

Function.prototype.myCall = function(context, ...args) {
    const newFunc = Object.create(context || null);
    newFunc.fn = this;
    newFunc.fn(...args);
  }

// -------------apply----------------------

Function.prototype.myApply = function(context, args) {
    if (!Array.isArray(args)) {
      console.error('Arguments is not a array object');
      return;
    }
    const newFunc = Object.create(context || null);
    newFunc.fn = this;
    newFunc.fn(...args);
  }




// -------------bind ----------------------

Function.prototype.customBind = function () {
    const fn = this;
    const contenxt = arguments[0];
    const args = [];
    for (let i =1; i < arguments.length;i++){
        args.push(arguments[i])
    }
    const output = fn.apply(contenxt, args);
    return function () {
        return output
    }
}

Function.prototype.myBind = function(context, ...args) {
    // check if this points to a function type
    if (!(this instanceof Function)) {
      console.error('this is not a function type.');
      return null;
    }
  
    return () => {
      this.call(context, ...args);
    }
  }