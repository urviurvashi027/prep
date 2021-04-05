function a(num) {return num +10}
function b(num) {return num * 2}
function c(num) {return num + 20}

function pipes(...agrs) {
  return function(val) {
      for (let  i =0; i< agrs.length; i++) {
        val = agrs[i](val)
      }
      return val;
  } 
}
function d(value) {
    // API CALL => implemented using promise
    return new Promise((resolve) => {
        setTimeout(() => resolve(value * value), 2000);
    });
}

function e(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value - 50), 500);
    });
}

function r(value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value / 3), 800);
    });
}


function pipesA(...agrs) {
  return async function(val) {
      for (let  i =0; i< agrs.length; i++) {
        val = await agrs[i](val)
      }
      return val;
  } 
}

function pipesReduce(...fn) {
  return function(val) {
    return fn.reduce(async(val, el) => {
      const v = await val;
        return el(v)
      },val)
      // for (let  i =0; i< agrs.length; i++) {
      //   val = await agrs[i](val)
      // }
      // return val;
  } 
}

function pipe(...fns) {
    return function(value) {
        return fns.reduce(async (value, fn) => { 
           return fn(await value);
        }, value);
    }
}



function pipesB(...fns) {
  return function(val) {
    return new Promise((res,rej) => {
       for (let  i =0; i< fns.length; i++) {
       fns[i](val).then((v)=> {val = v;});
        if (i === fns.length-1) {
           return res(val);
        }
      }
    })
  } 
}


// pipesA(d,e,r)(10).then(console.log)
pipesB(d,e,r)(10).then((v) => {console.log(v, 'iii')})
// pipesReduce(d,e,r)(10).then((v) => {console.log(v, 'pppp')})