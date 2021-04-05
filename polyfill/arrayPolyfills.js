// forEach ------------------------------------------------------------------------------------ 

Array.prototype.eachEL = function(callback) {
    for (var i = 0; i < this.length; i++) {
      callback(this[i], i, this) // currentValue, index, array
    }
  }

  [11,22,33,44].eachEL(function(el, i, array){
      console.log(el,i,array ,"element")
  });

  // map -----------------------------------------------------------------------------------------

  Array.prototype.myMap = function(callback) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
    }
    return arr // return array
  }

  const x = [09,76,54,21,54].myMap(function(album) {
    return album+1
  })
  
  console.log(x);

  // concat

  Array.prototype.concat = function(array){
    var arr1 = this;
    var result = [];
    for(var i =0; i < arr1.length; i++){
      result.push(arr1[i]);
    }
    for(var j = 0; j < array.length; j++){
      result.push(array[j]);
    }
    return result;
    }

  // reverse

  Array.prototype.revy = function(){ 
    const ctx = this;
    const result = [];
    for (let index = ctx.length - 1; index >= 0; index--) {
      result.push(ctx[index]);

    }
    return result;
  }

  const array2 = ['blastoff', 1, 2, 3];
  const y1 = array2.revy();
  console.log(y1);

  // join todo

  Array.prototype.join = function(){ 
    const ctx = this;
    let args = arguments[0];
    let string = "";
    for (let index = 0; index < ctx.length; index++) {
      string += (args) ? args+ctx[index] : ','+ctx[index];
    }
    return string.slice(1);
  }
 
  const array = ['blastoff', 1, 2, 3];
  const y = array.join();
  console.log(y);

  // filter todo

  Array.prototype.filter = function (fn) {
    const context = this;
    const result = [];
    if (context.length > 0) {
      for (let i = 0; i < context.length; i++) {
        let output = (fn(context[i], i, context));
        (output) ? result.push(context[i]) : null
      }
    }
    return result
  }

  // reduce todo



  // return promise from map
